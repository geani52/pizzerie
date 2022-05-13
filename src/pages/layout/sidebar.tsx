import React, { useState } from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { GiSaltShaker } from "react-icons/gi";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";

export const Sidebar:React.FC<{
    menuCollapse:boolean,
    onClickCollapse:React.MouseEventHandler<any>
}> = (props) => {

  type menuItem = {
    title: string,
    icon: JSX.Element,
    link: string
  }

  let menuItem:menuItem[] = [
    {
      title: "Oferte",
      icon: <img className="meniuItemImg" src="Images/offer.svg" />,
      link: "/catalog-pizza"
    },
    {
      title: "Catalog Pizza",
      icon: <img className="meniuItemImg" src="Images/slice.svg" />,
      link: "/catalog-pizza"
    },
    {
      title: "Sosuri",
      icon: <img className="meniuItemImg" src="Images/hotsauce.svg" />,
      link: "/catalog-sosuri"
    },
    {
      title: "Desert",
      icon: <img className="meniuItemImg" src="Images/cake.svg" />,
      link: "/catalog-desert"
    },
    {
      title: "Băuturi",
      icon: <img className="meniuItemImg" src="Images/drink.svg" />,
      link: "/catalog-bauturi"
    },
    {
      title: "Rețete",
      icon: <img className="meniuItemImg" src="Images/ladle.svg" />,
      link: "/catalog-pizza"
    }
  ]
  return (
    <>
      <ProSidebar className={props.menuCollapse ? "mobile" : ""} collapsed={props.menuCollapse}>
            <SidebarHeader>
            <Link to="/">
                <img className="logo" src="Images/logo1.svg" />
                <div className="slogan">Pizzeria<br /> Deliciosa</div>
                </Link>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="square">
                  {menuItem.map((item: any, idx: any) => <MenuItem key={idx} title={item.title} icon={item.icon}>{item.title}<Link to={item.link} /></MenuItem>)}
                </Menu>
            </SidebarContent>

            <SidebarFooter>
                <AiOutlineCaretLeft onClick={props.onClickCollapse} className={`resizeIcon ${props.menuCollapse ? "rotate" : ""}`} />
            </SidebarFooter>
      </ProSidebar>
    </>
  );
};
