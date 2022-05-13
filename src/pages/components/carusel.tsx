import React, { useState } from 'react';
import useInView from 'react-cool-inview';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AppHelpers } from '../../helpers/AppHelpers';
import { ProduseProps } from '../page/catalog_pizza';
import { ModalComenzi } from './modalComenzi';


const sliderSettings = {
    className: "center",
    centerMode: true,
    lazyLoad: true,
    // infinite: false,
    initialSlide: 2,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]


};

let products = [
    {name: 'margherita', label: 'Pizza Margherita'},
    {name: 'salami', label: 'Pizza Salami'},
    {name: 'quattro', label: 'Pizza Quattro Formaggi'},
    {name: 'diavola', label: 'Pizza Diavola'},
    {name: 'funghi', label: 'Pizza Funghi'},
    {name: 'hawaiana', label: 'Pizza Hawaiana'}
];

const Carusel = (props:any) => {
    const {ref}: any = useInView<HTMLDivElement>({
        threshold: 0.5,
        onChange({inView}) {
            //setVisibleSection((prevState: string) => inView ? 'produse-participante' : prevState);
        }
    });

    type ModalState = {
        open: boolean,
        produs: ProduseProps
    }

    const [modal, setModal] = useState<ModalState>({
        open: false,
        produs: {
            id: "",
            name: "",
            description: "",
            price: "",
            img: "",
            pretPerDimensiune: [],
            dimensiunePizza: -1,
            selectPret: 0,
            qty: 0
        } 
    })

    return (<>
        <div className="sd-section sd-section__products" ref={ref} id="produse-participante">
            <h1 className="sd-section__title">Sortimente Pizza</h1>

            {/*@ts-ignore*/}
            <Slider {...sliderSettings} >
                {AppHelpers.produse.map((produs:ProduseProps)=>{
                    return(
                      <div onClick={() =>
                        setModal({
                            open: true,
                            produs: produs})} className={`sd-product`} key={`${produs.name}`}>
                      <div className={`product product-${produs.name.replace('Pizza ', '').toLowerCase()}`}>
                      </div>
                      <p className="name">{produs.name}</p>
                  </div>
                    )
                })}
            </Slider>
        </div>
        <ModalComenzi 
                open={modal.open}
                produs={modal.produs}
                close={() => setModal({open: false, produs: {
                    id: "",
                    name: "",
                    description: "",
                    price: "",
                    img: "",
                    pretPerDimensiune: [],
                    dimensiunePizza: -1,
                    selectPret: 0,
                    qty: 0
                }})}
            />
        </>
    );
};

export default Carusel;
