import React, { useState } from "react";
import { AppHelpers } from "../../helpers/AppHelpers";
import { ModalComenzi } from "../components/modalComenzi";

export type ProduseProps = {
    id: string,
    name: string,
    description: string,
    price: string,
    img: string,
    pretPerDimensiune: number[],
    dimensiunePizza: number,
    selectPret: any,
    qty: number
}

export type SosProps = {
    id: string,
    name: string,
    cantitate: string,
    price: number,
    qty: number
}


export const CatalogSosuri = () => {

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
    
    return(
        <>
        <div className="catalogPizza">
            {AppHelpers.sosuri.map((produs: ProduseProps, idx: number) => 
                <div key={idx} className="produse">
                    <div className="imgProduse"><img src={produs.img} /></div>
                    <div className="contentProduse">
                        <div className="name">{produs.name}</div>
                        <div className="descriere">{produs.description}</div>
                        <div className="pret">{produs.price}</div>
                    </div>
                    <div className="butoane"><button onClick={() =>
                        setModal({
                            open: true,
                            produs: produs})} className="myButton">Comanda!</button>
                    </div>

                    <div className="total"></div>
                </div>
            )}
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
    )
}