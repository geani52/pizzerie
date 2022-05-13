import React, { useState, useEffect} from "react";
import { CartItemProps } from "./modalComenzi";
import { useCookies } from "react-cookie";
import { SDInputForm, SDInputFormType } from "./SDInputForm";
import { SDSelectMagazine } from "./SDSelectPizza";
import { BsTrashFill } from "react-icons/bs";

type ModalProps = {
    open?: boolean,
    close: () => void,
    itemsCart?: any
}

// type DbPizzaItemsProps = {
//     dimensiune: string,
//     extra: string,
//     name: string,
//     qty: string,
//     totalPriceItems: string
// }



export const ModalCart:React.FC<ModalProps> = (props) => {

    const DimensiuniPizza = [
        {value: "bucuresti", label: 'Bucuresti'},
        {value: "timisoara", label: 'Timișoara'},
        {value: "targu-jiu", label: 'Târgu-Jiu'}
    ]

    
    // const [cart, setCart] = useState<DbPizzaItemsProps[]>([])
    const [cookies, setCookie] = useCookies(['cartPizzaItems']);

    type initialValuesStateProps = {
        nume: string,
        prenume: string,
        telefon: string,
        adresa: string,
        mentiuni: string,
        oras: string
    }

    const initialValuesState:initialValuesStateProps = {
        nume: "",
        prenume: "",
        telefon: "",
        adresa: "",
        mentiuni: "",
        oras: ""
    }

    const [modalForm, setModalForm] = useState(false)
    const [success, setSuccess] = useState(false)
    const [values, setValues] = useState<initialValuesStateProps>(initialValuesState);
    const [errors, setErrors] = useState<{[key:string]:any}>(initialValuesState)

    let error:{[key:string]:any} = []

    const erori = () => {
            if(values.nume.length === 0) error.nume = "Introduceți numele!"
            if(values.prenume.length === 0) error.prenume = "Introduceți prenumele!"
            if(values.telefon.length === 0) error.telefon = "Introduceți numarul de telefon!"
            if(values.telefon && !values.telefon.match(/^07[0-9]{8}/)) error.telefon = "Numărul de telefon este incorect!"
            if(values.adresa.length === 0) error.adresa = "Introduceți adresa"
            if(values.oras.length === 0) error.oras = "Selectați orașul"
            setErrors(error)
    }

    type client = {
        client:initialValuesStateProps
        comanda: {}
    }



    const trimitereDate = () => {
        const comanda:client[] = [
            {
                client: initialValuesState,
                comanda: cookies.cartPizzaItems
            }
        ]
        if(Object.keys(error).length === 0){
           comanda[0].client = values;
           setSuccess(true)
           setCookie('cartPizzaItems', "", { path: '/' });
        }
        return comanda;
    }

    const initialStateModal = () => {
        props.close();
        setModalForm(false);
        setSuccess(false);
    }

    //pretul total al produselor aflate in cos:
    let totalPrice
    if(cookies.cartPizzaItems){
        totalPrice = cookies.cartPizzaItems.map((x:CartItemProps)=>x.totalPriceItem)
                       .reduce((previousValue:number, currentValue:number) => previousValue + currentValue, 0)
    }


    const actualizareCantitate = (clicked_id?:number, counter?: string) => {

        //aflam produsul aferent butonului pe care se face click
        const produsClick = cookies.cartPizzaItems[Number(clicked_id)]

        //aflam pretul per produs
        const pretPerProdus = produsClick.totalPriceItem / produsClick.qty

        //actualizam cantitatea si pretul
        cookies.cartPizzaItems[Number(clicked_id)] = {
            id: produsClick.id,
            name: produsClick.name,
            extra: produsClick.extra,
            dimensiune: produsClick.dimensiune,
            qty: counter === "+" ? produsClick.qty+1 : produsClick.qty-1,
            totalPriceItem: counter === "+" ? produsClick.totalPriceItem + pretPerProdus : produsClick.totalPriceItem - pretPerProdus,
            image: produsClick.image,
            selectedPrice: produsClick.selectedPrice
            }

        //setam cookie-ul cu noile valori
            setCookie('cartPizzaItems', [...cookies.cartPizzaItems], { path: '/' })

            if(produsClick.qty === 1 && counter === "-"){
                if (produsClick.qty > -1) {
                cookies.cartPizzaItems.splice(Number(clicked_id), 1)
                }
                setCookie('cartPizzaItems', [...cookies.cartPizzaItems], { path: '/' })
            }
        
        //stergem produsul indiferent de cantitatea acestuia
            if(counter === "clear"){
                cookies.cartPizzaItems.splice(Number(clicked_id), 1)
                setCookie('cartPizzaItems', [...cookies.cartPizzaItems], { path: '/' })
            }
    }

    // const getDataDb = () => {fetch('http://localhost/backend/')
    //    .then((response) => response.json())
    //    .then((data)=>{
    //     //    return data.pizzaItems;
    //     //    console.log(data.pizzaItems)
    //        setCart(data.pizzaItems)
    //    })
    // }

    // useEffect(() => {
    //     // printData()
    //     getDataDb()
    //   }, []);

    //   console.log(cookies.cartPizzaItems.map((x:CartItemProps, id: number)=>x))
      
    const clickOnChild = (event:any) => {
        event.stopPropagation();
      }

      const overflow = (arg:any) =>{
        let body = document.getElementsByTagName("BODY") as HTMLCollectionOf<HTMLElement>;
        body[0].style.overflow = arg;
      }
      props.open ? overflow("hidden") : overflow("auto")

    return (
        <div onClick={()=>initialStateModal()} className={`background ${props.open? "active" : ""}`}>
            <div className="container">
                <div onClick={clickOnChild} className="bodyPopup">
                    <div className="body">
                            <div onClick={()=>initialStateModal()} className="closeX">×</div>

                            <div className="titlePop">
                                {modalForm === false ? "Coș cumpărături" : success === false ? "Formular" : "Comanda a fost plasată!"}
                            </div>
                        
                            <div className={`bake ${success === true ? "show":""}`}>
                                <img src="Images/bake.png" /><br /><strong>Timpul aproximativ de livrare este de o oră!</strong>
                            </div>
                            {modalForm === false ?
                            //CART MODULE:
                            cookies.cartPizzaItems && cookies.cartPizzaItems.length ?<>
                                <div className="produseCos">

                                    <div className="headerTitle">
                                        <div className="produs">
                                            Produs:
                                        </div>
                                        <div className="pret">
                                            Pret:
                                        </div>
                                        <div className="cantitate1">
                                            Cantitate:
                                        </div>
                                    </div>
                                    
                                    <div className="afisareProdCos">
                                    {cookies.cartPizzaItems.map((x:CartItemProps, id: number)=><div key={id} className="prodCos">
                                        <div className="produs">
                                            <div className="imgText">
                                                <img src={x.image} />
                                                <div>
                                                    {x.name}<br />
                                                    <span className="extra">{x.extra.length ? `Extra: ${x.extra.join(", ")}` : ""}</span>
                                                </div>
                                                <br />
                                            </div>
                                        </div>
                                        <div className="pret">
                                            {x.totalPriceItem} lei
                                        </div>
                                        <div className="cantitate1">
                                        <div className="cantitateCart">
                                            <button className="btnCantitate" onClick={() => actualizareCantitate(id, "-")}>-</button>
                                            <div className="showCantitate">{x.qty}</div>
                                            <button className="btnCantitate" onClick={() => actualizareCantitate(id, "+")}
                                            >+</button>
                                            <button className="btnCantitate clear" onClick={() => actualizareCantitate(id, "clear")}
                                            ><BsTrashFill /></button>
                                        </div>
                                        </div>
                                    </div>
                                    )}
                                    </div>
                                </div>

                                <div className="total"><b>Total: {totalPrice} lei</b></div>

                                <div className="buttonContainer">
                                    <button onClick={() => setModalForm(true)} className="button">Finalizează comanda!</button>
                                </div>
                                </> : <div className="imgCart"><img className="imgCart" src="Images/cart.png" /><br />Coșul este gol!</div>
                            :
                            //FORM MODULE:
                            <div className={`center ${success ? "hide" : ""}`}>
                            <div className="form">
                            <div className="half">
                                <div className="a">
                                    <SDInputForm
                                        name="input"
                                        type={SDInputFormType.text}
                                        value={values}
                                        placeholder="Nume"
                                        fieldName="Nume:"
                                        onChange={(e)=>{
                                            setValues(prevState => {
                                                return{
                                                    ...prevState, nume: e.target.value
                                                }
                                            })
                                        }}
                                        className="adresa"
                                        error={errors.nume}
                                    />
                                </div>
                                <div className="a2">
                                    <SDInputForm
                                        name="input"
                                        type={SDInputFormType.text}
                                        value={values}
                                        placeholder="Prenume"
                                        fieldName="Prenume:"
                                        onChange={(e)=>{
                                            setValues(prevState => {
                                                return{
                                                    ...prevState, prenume: e.target.value
                                                }
                                            })
                                        }}
                                        error={errors.prenume}
                                    />
                                </div>
                            </div>

                            <div className="half">
                                <div className="a">
                                    <SDInputForm
                                    name="telefon"
                                    type={SDInputFormType.text}
                                    value={values}
                                    placeholder="Telefon"
                                    fieldName="Telefon:"
                                    maxLength={10}
                                    onChange={(e)=>{
                                        setValues(prevState => {
                                            return{
                                                ...prevState, telefon: e.target.value.replaceAll(/[^0-9]/ig, '')
                                            }
                                        })
                                    }}
                                    error={errors.telefon}
                                    />
                                </div>
                                <div className="a2">
                                    <SDSelectMagazine 
                                    labelName="Alege orașul:"
                                    fieldName="oras"
                                    placeholder="Oraș"
                                    optionsValues={DimensiuniPizza}
                                    value={DimensiuniPizza.filter(option => 
                                        String(option.value) === String(values.oras))}
                                    onChange={(newVal) => {
                                            setValues(prevState =>{
                                                return{
                                                    ...prevState, oras: newVal.value
                                                }
                                            })
                                    }}
                                    error={errors.oras}
                                    />
                                </div>
                            </div>

                            <SDInputForm
                                name="adresa"
                                type={SDInputFormType.text}
                                value={values}
                                placeholder="Adresă"
                                fieldName="Adresă completă:"
                                onChange={(e)=>{
                                    setValues(prevState => {
                                        return{
                                            ...prevState, adresa: e.target.value
                                        }
                                    })
                                }}
                                error={errors.adresa}
                            />

                            <div className="textarea">
                                <div className="fieldName">
                                    Mențiuni:
                                </div>
                                <textarea
                                    placeholder="Mențiuni..."
                                    onChange={(e)=>{
                                        setValues(prevState => {
                                            return{
                                                ...prevState, mentiuni: e.target.value
                                            }
                                        })
                                    }}
                                />
                            </div>

                            </div>

                            <div className="buttonContainer">
                                <button onClick={() => {erori(); trimitereDate()
                                    }} className="button">Trimite comanda!</button>
                            </div>

                            <div className={`bake ${success === true ? "show":""}`}>
                                <img src="Images/bake.png" />
                            </div>

                            </div>
                            }
                </div>
                </div>
            </div>
        </div>
    )
}