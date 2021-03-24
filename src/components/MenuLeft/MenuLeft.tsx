import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import { connect, useSelector } from "react-redux";
import Swal from "sweetalert2";

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
    if (menu.to === "/signin") {
      alertSession();
    }
    if (menu.to === "/lesson") {
      alertTraining();
    }
  };

  const handlerSignOut = () => {
    sessionStorage.setItem("isAuth", "false");
    //history.push("/createLessonAudio");
  };
  const pushPage = () => {
    history.push("/signin");
  };
  const alertSession = () => {
    Swal.fire({
      title: "¿Estás seguro de cerrar sesión?",
      text: "Tu sesión se cerrará, volverás al login.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        handlerSignOut();
        history.push("/signin");
        window.location.reload();
        /*Swal.fire("Deleted!", "Your file has been deleted.", "success");*/
      }
    });
  };
  const alertTraining = () => {
    Swal.fire({
      title: "Actividad de entrenamiento",
      text:
        "Esta actividad no tiene ninguna validez, sólo es de entrenamiento.",
      icon: "info",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/lesson");
        //window.location.reload();
        /*Swal.fire("Deleted!", "Your file has been deleted.", "success");*/
      }
    });
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
          exact
          to="/"
          name="home"
          active={activeMenu === "/"}
          onClick={handlerMenu}
        >
          <Icon name="home" /> <span className="lyrics">Inicio</span>
        </Menu.Item>
        {sessionStorage.getItem("role") === "student" && (
          <>
            {/*<Menu.Item
              as={Link}
              to="/lesson"
              name="lesson"
              active={activeMenu === "/lesson"}
              onClick={handlerMenu}
            >
              <Icon name="tasks" />{" "}
              <span className="lyrics">Actividad Demo</span>
            </Menu.Item>*/}
            <Menu.Item
              as={Link}
              to="/listLesson"
              name="listLesson"
              active={activeMenu === "/listLesson"}
              onClick={handlerMenu}
            >
              <Icon name="tasks" /> <span className="lyrics">Mis Terapias</span>
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/score"
              name="score"
              active={activeMenu === "/score"}
              onClick={handlerMenu}
            >
              <Icon name="edit" />{" "}
              <span className="lyrics">Mis calificaciones</span>
            </Menu.Item>
          </>
        )}
        {sessionStorage.getItem("role") === "teacher" && (
          <>
            <Menu.Item
              as={Link}
              exact
              to="/createLesson"
              name="createLesson"
              active={activeMenu === "/createLesson"}
              onClick={handlerMenu}
            >
              <Icon name="tasks" />{" "}
              <span className="lyrics">Crear Terapia Imágenes</span>
            </Menu.Item>
            <Menu.Item
              as={Link}
              exact
              to="/createLessonAudio"
              name="createLessonAudio"
              active={activeMenu === "/createLessonAudio"}
              onClick={handlerMenu}
            >
              <Icon name="edit" />{" "}
              <span className="lyrics">Crear Terapia Audios</span>
            </Menu.Item>
            <Menu.Item
              as={Link}
              exact
              to="/createLessonVideo"
              name="createLessonVideo"
              active={activeMenu === "/createLessonVideo"}
              onClick={handlerMenu}
            >
              <Icon name="edit" />{" "}
              <span className="lyrics">Crear Terapia Vídeos</span>
            </Menu.Item>
          </>
        )}
        {sessionStorage.getItem("role") === "admin" && (
          <>
            <Menu.Item
              as={Link}
              to="/enrollmentStudent"
              name="enrollmentStudent"
              active={activeMenu === "/enrollmentStudent"}
              onClick={handlerMenu}
            >
              <Icon name="tasks" />{" "}
              <span className="lyrics">Crear cuenta estudiante</span>
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/enrollmentTeacher"
              name="enrollmentTeacher"
              active={activeMenu === "/enrollmentTeacher"}
              onClick={handlerMenu}
            >
              <Icon name="edit" />{" "}
              <span className="lyrics">Crear cuenta Profesor</span>
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/getAllStudents"
              name="getAllStudents"
              active={activeMenu === "/getAllStudents"}
              onClick={handlerMenu}
            >
              <Icon name="edit" />{" "}
              <span className="lyrics">Listar Estudiantes</span>
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/getAllTeachers"
              name="getAllTeachers"
              active={activeMenu === "/getAllTeachers"}
              onClick={handlerMenu}
            >
              <Icon name="edit" />{" "}
              <span className="lyrics">Listar Profesores</span>
            </Menu.Item>
          </>
        )}
        <Menu.Item
          as={Link}
          exact
          to="/signin"
          name="signout"
          active={activeMenu === "/signin"}
          onClick={handlerMenu}
        >
          <Icon name="sign-out" /> <span className="lyrics">Cerrar Sesión</span>
        </Menu.Item>
      </div>

      <div className="footer-menu">
        <img id="image-sidebar" src={ImageSideBar} alt="image-sidebar" />
      </div>
    </Menu>
  );
}

export default connect()(withRouter(MenuLeft));
