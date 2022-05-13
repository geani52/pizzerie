import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export const Footer = () => {

    type logo = {
        src: JSX.Element,
        link: string
    }

    const logo:logo[]= [
        {
            src: <FaFacebook />,
            link: "a"
        },
        {
            src: <AiFillInstagram />,
            link: "b"
        },
        {
            src: <AiFillYoutube />,
            link: "c"
        }
    ]

    return<div className="footer">
            {logo.map((x:any, idx:any) => <div key={idx} className="footerItem">{x.src}</div>)}
          </div>
}