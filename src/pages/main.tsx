import React, { useState } from "react";
import useWindowDimensions from "../helpers/windowDimensions";
import { Footer } from "./layout/footer";
import { Sidebar } from "./layout/sidebar";
import { TopContact } from "./layout/topContact";

type Main = {
    title: string,
    contentPage: JSX.Element
}

export const Main:React.FC<Main>= (props) => {
    document.title = props.title;
    const [sidebarCollapse, setSidebarCollapse] = useState(false)
    const { width } = useWindowDimensions();

    const [control, setControl] = useState(false)
    
    if(width < 651 && control === false){
        setControl(true)
        setSidebarCollapse(true)
    }

    if(width > 650 && control === true){
        setControl(false)
        setSidebarCollapse(false)
    }

    return(
        <>
            <div className="main">
                <div>
                    <Sidebar 
                        menuCollapse={sidebarCollapse}
                        onClickCollapse={() => setSidebarCollapse(!sidebarCollapse)}/>
                </div>
                
                <div className={`content ${sidebarCollapse ? "mobile" : ""}`}>
                    <TopContact />
                    <img className="imgContentRight" src="Images/pizza.png" />
                    <img className="imgContentBottom" src="Images/pizza2.png" />
                    <div className="page">
                        <div className="title">{props.title}</div>
                        {props.contentPage}
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}