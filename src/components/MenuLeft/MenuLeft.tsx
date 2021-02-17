import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Sidebar, Icon, Menu } from "semantic-ui-react";
import { connect, useSelector } from "react-redux";

import ImageSideBar from "../../assets/svg/girl_sidebar.svg";

import "../../styles/theme.scss";
import "./MenuLeft.scss";

function MenuLeft(props) {
  const { location } = props;
  const [activeMenu, setActiveMenu] = useState("/");
  const theme_global = useSelector((state: any) => state.theme_global);
  const auth_global = useSelector((state: any) => state.auth_global);
  const history = useHistory();
  const handlerMenu = (e: any, menu: any) => {
    console.log("Menu -> " + menu.to);
    setActiveMenu(menu.to);
  };
  const pushPage = () => {
    history.push("/signin");
  };
  console.log(auth_global.auth);
  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);
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
        {sessionStorage.getItem("role") === "student" && (
          <>
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
          </>
        )}
        {sessionStorage.getItem("role") === "teacher" && (
          <>
            <Menu.Item
              as={Link}
              to="/createLesson"
              name="createLesson"
              active={activeMenu === "/createLesson"}
              onClick={handlerMenu}
            >
              <Icon name="tasks" /> Crear Actividad Imágenes
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/createLessonAudio"
              name="createLessonAudio"
              active={activeMenu === "/createLessonAudio"}
              onClick={handlerMenu}
            >
              <Icon name="edit" /> Crear Actividad Audios
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/createLessonVideo"
              name="createLessonVideo"
              active={activeMenu === "/createLessonVideo"}
              onClick={handlerMenu}
            >
              <Icon name="edit" /> Crear Actividad Videos
            </Menu.Item>
          </>
        )}
        {sessionStorage.getItem("role") === "admin" && (
          <>
            <Menu.Item
              as={Link}
              to="/activities"
              name="activities"
              active={activeMenu === "/createStudent"}
              onClick={handlerMenu}
            >
              <Icon name="tasks" /> Crear cuenta estudiante
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/score"
              name="score"
              active={activeMenu === "/createTeacher"}
              onClick={handlerMenu}
            >
              <Icon name="edit" /> Crear cuenta Profesor
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/score"
              name="score"
              active={activeMenu === "/getAllStudents"}
              onClick={handlerMenu}
            >
              <Icon name="edit" /> Listar Estudiantes
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/score"
              name="score"
              active={activeMenu === "/getAllTeachers"}
              onClick={handlerMenu}
            >
              <Icon name="edit" /> Listar Profesores
            </Menu.Item>
          </>
        )}
      </div>

      <div className="footer-menu">
        <img id="image-sidebar" src={ImageSideBar} alt="image-sidebar" />
      </div>
    </Menu>
  );
}

export default withRouter(MenuLeft);
