import React, { useEffect, useState } from "react";
import { SDSelectMagazine } from "./SDSelectPizza";
import { ProduseProps, SosProps } from "../page/catalog_pizza";
import Select, {SingleValue} from "react-select";
import { AppHelpers } from "../../helpers/AppHelpers";
import { SDSelectExtra } from "./SDSelectExtra";
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const DimensiuniPizza = [
    {value: "0", label: '24 cm'},
    {value: "1", label: '30 cm'},
    {value: "2", label: '40 cm'}
]

type ModalProps = {
    open: boolean,
    produs: ProduseProps,
    close: () => void
}

export type CartItemProps = {
    id: number,
    name: string,
    extra: string[],
    dimensiune: number,
    qty: number,
    totalPriceItem: number,
    image: string,
    selectedPrice: number
}

export const ModalComenzi:React.FC<ModalProps> = (props) => {

    const [cookies, setCookie] = useCookies(['cartPizzaItems']);

    const clickOnChild = (event:any) => {
        event.stopPropagation();
      }

      const overflow = (arg:any) =>{
        let body = document.getElementsByTagName("BODY") as HTMLCollectionOf<HTMLElement>;
        body[0].style.overflow = arg;
      }
      props.open ? overflow("hidden") : overflow("auto")

      useEffect(() => {
          setPizzaItems([props.produs])
    }, [props.produs]);

      const [pizzaItems, setPizzaItems] = useState<ProduseProps[]>([]);
      const [extraItems, setExtraItems] = useState<SosProps[]>([]);
      const [mesajAddProd, setMesajAddProd] = useState(false)
    //   const totalPizza = Number(pizzaItems.filter((x:ProduseProps)=> x.name === props.produs.name).map((x:ProduseProps)=> x.selectPret)) * 
    //                      Number(pizzaItems.map(x=>x.qty));

    const totalPizza = Number(pizzaItems.map((x:ProduseProps)=>x.qty*Number(x.selectPret)))
      const totalExtra = extraItems.map((x:any)=>Number(x.price.toFixed(2))).reduce((prev: any, current: any)=> prev+current, 0) * 
                         Number(pizzaItems.map(x=>x.qty));
      const totalPrice = totalPizza + totalExtra;


      const addCartItems = () => {


        if(!cookies.cartPizzaItems){
                pizzaItems.map((x:ProduseProps)=>setCookie('cartPizzaItems', [{
                    id: Number(x.id),
                    name: props.produs.name,
                    extra: extraItems.map(x=>x.name),
                    dimensiune: x.dimensiunePizza,
                    qty: x.qty,
                    totalPriceItem: totalPrice,
                    image: x.img,
                    selectedPrice: x.selectPret
                }]
            , { path: '/' }));
        }
        else{
            const nameFind = cookies.cartPizzaItems.find((v:CartItemProps)=> v.name === pizzaItems.map((x:ProduseProps)=>x.name).toString()
            &&
            v.extra.join(",") === extraItems.map((x:SosProps)=>x.name).join(",")
            )
            const index = cookies.cartPizzaItems.indexOf(nameFind)
            if(nameFind){
                pizzaItems.map((x:ProduseProps)=> cookies.cartPizzaItems[index] = {
                    id: Number(x.id),
                    name: x.name,
                    extra: extraItems.map(x=>x.name),
                    dimensiune: x.dimensiunePizza,
                    qty: x.qty + cookies.cartPizzaItems[index].qty,
                    totalPriceItem: cookies.cartPizzaItems[index].totalPriceItem + totalPrice,
                    image: x.img,
                    selectedPrice: x.selectPret
                    })
                    
                    setCookie('cartPizzaItems', [...cookies.cartPizzaItems], { path: '/' })
            }
            else{
                pizzaItems.map(x=>setCookie('cartPizzaItems', [...cookies.cartPizzaItems, {
                    id: Number(x.id),
                    name: x.name,
                    extra: extraItems.map(x=>x.name),
                    dimensiune: x.dimensiunePizza,
                    qty: x.qty,
                    totalPriceItem: totalPrice,
                    image: x.img,
                    selectedPrice: x.selectPret
                    }]
            , { path: '/' }));
            }
        }
      }

      const cantitate = () => {
        const exist = pizzaItems.find((x:ProduseProps) => x.id === props.produs.id);
        if(exist){
            setPizzaItems(
                pizzaItems.map((x: ProduseProps) => x.id === props.produs.id ? {
                    ...exist, qty: x.qty + 1
                  } : x)
              );                        
        }

        if(!exist){
                setPizzaItems([...pizzaItems, {...props.produs,
                qty: +1,
                selectPret: props.produs.pretPerDimensiune[0]
            }])
        }
      }

      const cantitateMinus = () => {
        const exist = pizzaItems.find((x:ProduseProps) => x.id === props.produs.id);
        if(exist && Number(pizzaItems.map(x=>x.qty)) > 1){
            setPizzaItems(
                pizzaItems.map((x: ProduseProps) => x.id === props.produs.id ? {
                    ...exist, qty: x.qty - 1
                  } : x)
              );                        
        }
      }

      const mesaj = () => {
          setMesajAddProd(true)
          setTimeout(() => {setPizzaItems([]); setExtraItems([]); props.close(); setMesajAddProd(false)}, 3000);
      }

      const notify = () => toast('Produsul a fost adăugat în coș!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        type: "success"
        });

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

    return (
        
        <div onClick={() =>{setPizzaItems([]); setExtraItems([]); props.close()}} className={`background ${props.open? "active" : ""}`}>
            <div className="container">
                <div onClick={clickOnChild} className="bodyPopup">
                {mesajAddProd ? <>
                    <div id="circle-loader-wrap">
                <div className="left-wrap">
                    <div className="loader"></div>
                </div>
                <div className="right-wrap">
                    <div className="loader"></div>
                </div>
            </div>
                                    <div className="titlePop">Produsul a fost adăugat în coș!</div>
                                </> : ""}
                    <div className={`body ${mesajAddProd? "hide" : ""}`}>
                                <div onClick={() =>{setPizzaItems([]); setExtraItems([]); props.close()}} className="closeX">×</div>
                                <div className="titlePop">{props.produs.name}</div>

                                <div className="info">
                                    <div className="imgProd">
                                        <img src={props.produs.img} />
                                    </div>
                                    <div className="text">
                                        <div className="price">{props.produs.price}</div>
                                        <div className="description">{props.produs.description}</div>
                                    </div>
                                </div>

                                {props.produs.name.split(" ")[0].toLowerCase() === "pizza" ?
                                <div className="selectPizza">
                                    <SDSelectMagazine 
                                        fieldName={props.produs.name.replace('Pizza' , '').trim().toLowerCase()+"Dimensiune"}
                                        placeholder="Dimensiune Pizza (24cm)"
                                        optionsValues={DimensiuniPizza}
                                        value={
                                            DimensiuniPizza.filter(option => 
                                                       String(option.value) === String(pizzaItems.map(x=>x.dimensiunePizza)))
                                        }
                                        onChange={(newVal: SingleValue<any>) => {
                                            const exist = pizzaItems.find((x:ProduseProps) => x.id === props.produs.id);
                                            if(!exist){
                                                setPizzaItems([...pizzaItems, {...props.produs, selectPret: Number(newVal.value)=== 0 ? props.produs.pretPerDimensiune[0] : 
                                                    Number(newVal.value)=== 1 ? props.produs.pretPerDimensiune[1] :
                                                    props.produs.pretPerDimensiune[2], 
                                                    dimensiunePizza: Number(newVal.value),
                                                    qty: 1
                                                }])                          
                                            }
                                            if(exist){
                                                setPizzaItems(
                                                  pizzaItems.map((x: ProduseProps) => x.id === props.produs.id ? {
                                                      ...exist,
                                                      selectPret: Number(newVal.value)=== 0 ? props.produs.pretPerDimensiune[0] : 
                                                                  Number(newVal.value)=== 1 ? props.produs.pretPerDimensiune[1] :
                                                                  props.produs.pretPerDimensiune[2],
                                                      dimensiunePizza: Number(newVal.value)
                                                    } : x)
                                                );
                                            }
                                        }}
                                    />
                                </div>
                                :""
                                }

                                {props.produs.name.split(" ")[0].toLowerCase() === "pizza" ?
                                <div className="extra">
                                <details>
                                    <summary className="itemsExtra">Adauga sos</summary>
                                    {AppHelpers.sos.map(produsExtra => <label key={produsExtra.id} className="itemExtra">
                                        <SDSelectExtra
                                            label={<>{produsExtra.name} + {produsExtra.price} lei</>}
                                            name="extra"
                                            values={extraItems}
                                            onClick={(e: any) => {
                                                setExtraItems(prevState => {
                                                    const exist = prevState.find((x:SosProps) => x.id === produsExtra.id);
                                                    return exist ? [...prevState.filter((s:SosProps)=>s.id !== produsExtra.id)]:
                                                    [...prevState,{...produsExtra}]
                                                })

                                                const existPizza = pizzaItems.find((x:ProduseProps) => x.id === props.produs.id);
                                                if(!existPizza){
                                                    setPizzaItems([...pizzaItems, {...props.produs,
                                                        qty: 1,
                                                        selectPret: props.produs.pretPerDimensiune[0]
                                                    }])
                                                }
                                            }}
                                            isChecked={extraItems.filter((x:SosProps) => x.id === produsExtra.id).length ? true : false}
                                        />
                                        </label>)}
                                </details>
                                <details>
                                    <summary className="itemsExtra">Adauga topping legume</summary>
                                    {AppHelpers.legume.map(produsExtra => <label key={produsExtra.id} className="itemExtra">
                                        <SDSelectExtra
                                            label={<>{produsExtra.name} + {produsExtra.price} lei</>}
                                            name="extra"
                                            values={extraItems}
                                            onClick={(e: any) => {
                                                setExtraItems(prevState => {
                                                    const exist = prevState.find((x:SosProps) => x.id === produsExtra.id);
                                                    return exist ? [...prevState.filter((s:SosProps)=>s.id !== produsExtra.id)]:
                                                    [...prevState,{...produsExtra}]
                                                })

                                                const existPizza = pizzaItems.find((x:ProduseProps) => x.id === props.produs.id);
                                                if(!existPizza){
                                                    setPizzaItems([...pizzaItems, {...props.produs,
                                                        qty: 1,
                                                        selectPret: props.produs.pretPerDimensiune[0]
                                                    }])
                                                }
                                            }}
                                            isChecked={extraItems.filter((x:SosProps) => x.id === produsExtra.id).length ? true : false}
                                        />
                                        </label>)}
                                </details>
                                <details>
                                    <summary className="itemsExtra">Adauga topping carne</summary>
                                    {AppHelpers.carne.map(produsExtra => <label key={produsExtra.id} className="itemExtra">
                                        <SDSelectExtra
                                            label={<>{produsExtra.name} + {produsExtra.price} lei</>}
                                            name="extra"
                                            values={extraItems}
                                            onClick={(e: any) => {
                                                setExtraItems(prevState => {
                                                    const exist = prevState.find((x:SosProps) => x.id === produsExtra.id);
                                                    return exist ? [...prevState.filter((s:SosProps)=>s.id !== produsExtra.id)]:
                                                    [...prevState,{...produsExtra}]
                                                })

                                                const existPizza = pizzaItems.find((x:ProduseProps) => x.id === props.produs.id);
                                                if(!existPizza){
                                                    setPizzaItems([...pizzaItems, {...props.produs,
                                                        qty: 1,
                                                        selectPret: props.produs.pretPerDimensiune[0]
                                                    }])
                                                }
                                            }}
                                            isChecked={extraItems.filter((x:SosProps) => x.id === produsExtra.id).length ? true : false}
                                        />
                                        </label>)}
                                </details>
                                <details>
                                    <summary className="itemsExtra">Adauga topping brânzeturi</summary>
                                    {AppHelpers.branzeturi.map(produsExtra => <label key={produsExtra.id} className="itemExtra">
                                        <SDSelectExtra
                                            label={<>{produsExtra.name} + {produsExtra.price} lei</>}
                                            name="extra"
                                            values={extraItems}
                                            onClick={(e: any) => {
                                                setExtraItems(prevState => {
                                                    const exist = prevState.find((x:SosProps) => x.id === produsExtra.id);
                                                    return exist ? [...prevState.filter((s:SosProps)=>s.id !== produsExtra.id)]:
                                                    [...prevState,{...produsExtra}]
                                                })

                                                const existPizza = pizzaItems.find((x:ProduseProps) => x.id === props.produs.id);
                                                if(!existPizza){
                                                    setPizzaItems([...pizzaItems, {...props.produs,
                                                        qty: 1,
                                                        selectPret: props.produs.pretPerDimensiune[0]
                                                    }])
                                                }
                                            }}
                                            isChecked={extraItems.filter((x:SosProps) => x.id === produsExtra.id).length ? true : false}
                                        />
                                        </label>)}
                                </details>
                            </div>
                            : ""
                            }

                                <div className="cantitate">
                                    <button className="btnCantitate" onClick={() => cantitateMinus()}>-</button>
                                    <div className="showCantitate">{pizzaItems.map(x=>x.qty)}</div>
                                    <button className="btnCantitate" onClick={() => cantitate()}>+</button>
                                </div>

                                {totalPrice? 
                                    <div className="totalPrice">
                                        {totalPizza ? props.produs.name.split(" ")[0].toLowerCase() === "pizza" ? `Pret pizza: ${totalPizza} lei` : `Pret ${props.produs.description.split(" ")[0].toLowerCase()} ${totalPizza} lei` : ""}
                                        <br />
                                        {totalExtra ? `Extra: ${totalExtra} lei` : ""}
                                        <br />
                                        {totalExtra && totalPizza ? `Total: ${totalPrice} lei` : ""}
                                    </div>
                                    :
                                    ""   
                                }

                                <div className="buttonContainer">
                                    <button className="button" onClick={() => {addCartItems(); notify()}}
                                    >Adaugă în coș!</button>
                                </div>
                                <ToastContainer />
                        </div>
                </div>
            </div>
        </div>
    )
}