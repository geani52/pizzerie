import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { IoCartSharp } from "react-icons/io5";
import { ModalCart } from "../components/modalCart";
import { CartItemProps } from "../components/modalComenzi";

export const TopContact = () => {

   type itemContactProps = {
       name: string,
       logo: JSX.Element,
       onClick: any,
       counter: any
   }

   const [openCart, setOpenCart] = useState({
       open: false,
   })

   const [cookies, setCookie] = useCookies(['cartPizzaItems']);

    const itemContact:itemContactProps[]= [
        {name: "077x.xxx.xxx",
        logo: <BsFillTelephoneFill className="imgContact" />,
        onClick: null,
        counter: <></>},
        {name: "pizza@gmail.com",
        logo: <HiMail className="imgContact" />,
        onClick: null,
        counter: <></>},
        {name: "Coș",
        logo: <IoCartSharp className="imgContact" />,
        onClick: () => setOpenCart({open: true}),
        counter: <div className="counter">{cookies.cartPizzaItems && cookies.cartPizzaItems.length}</div>}
    ]

    return<>
        <div className="topContact">
                {itemContact.map((x:itemContactProps, idx: number) => <div onClick={x.onClick} key={idx} className="itemContact">
                    {x.name}&nbsp;
                    {x.logo}
                    {cookies.cartPizzaItems && cookies.cartPizzaItems.length  ? x.counter : ""}
                    </div>)}
        </div>
        <ModalCart 
        open={openCart.open}
        close={()=> setOpenCart({open: false})}
        />
    </>
}