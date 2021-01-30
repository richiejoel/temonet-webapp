import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Sidebar, Icon, Menu } from "semantic-ui-react";
import { connect, useSelector } from "react-redux";

import ImageSideBar from "../../assets/svg/girl_sidebar.svg";

import "../../styles/theme.scss";
import "./MenuLeft.scss";

function MenuLeft() {
  const [activeMenu, setActiveMenu] = useState("/");
  const theme_global = useSelector((state: any) => state.theme_global);
  const handlerMenu = (e: any, menu: any) => {
    //console.log(menu);
    setActiveMenu(menu.to);
  };
  return (
    <Menu className={`menu-left  ${theme_global.theme}  `} secondary vertical>
      <div className="header-menu">
        <Icon name="bars" size="big" />
      </div>
      <div className="top">
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeMenu === "/"}
          onClick={handlerMenu}
        >
          <Icon name="home" /> Inicio
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/activities"
          name="activities"
          active={activeMenu === "/activities"}
          onClick={handlerMenu}
        >
          <Icon name="tasks" /> Mis actividades
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/score"
          name="score"
          active={activeMenu === "/score"}
          onClick={handlerMenu}
        >
          <Icon name="edit" /> Mis calificaciones
        </Menu.Item>
      </div>

      <div className="footer-menu">
        <img id="image-sidebar" src={ImageSideBar} alt="image-sidebar" />
      </div>
    </Menu>
  );
}

export default connect()(withRouter(MenuLeft));
