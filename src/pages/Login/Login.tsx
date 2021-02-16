import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { connect, useSelector, useDispatch } from "react-redux";
import SwitchTheme from "../../components/SwitchTheme";
import plane from "../../assets/paper_plane.svg";
import loginImage from "../../assets/login-image.svg";
import auth from "../../data/auth.json";
import { validateEmail } from "../../utils/Validations";

import { mVerifyAuthenticate } from "../../redux/actions/IsAuthenticateAction";
import {
  mVerifyAuthenticationStudent,
  mVerifyAuthenticationTeacher,
  mVerifyAuthenticationAdmin,
} from "../../redux/actions/AuthenticationAction";

import "./Login.scss";
import "../../styles/theme.scss";

function Login(): JSX.Element {
  const theme_global = useSelector((state: any) => state.theme_global);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState(defaultValueForm());
  const [formError, setFormError] = useState({ email: false, password: false });
  const history = useHistory();
  const onSubmit = () => {
    setFormError({ email: false, password: false }); //Se limpia objeto errores
    let errors = { email: false, password: false };
    let formOk = true;
    if (!validateEmail(formData.email)) {
      errors.email = true;
      formOk = false;
    }

    if (formData.password.length < 6) {
      errors.password = true;
      formOk = false;
    }
    setFormError(errors);
    toast.configure();
    if (formOk) {
      if (validateUsers(formData.email, formData.password)) {
        dispatch(mVerifyAuthenticate(true));
        toast.success("Ha iniciado sesión con éxito! 🚀");
        history.push("/");
      } else {
        dispatch(mVerifyAuthenticate(false));
        toast.error("El usuario o la contraseña son incorrectos. 😥");
        history.push("/signin");
      }
    }
  };
  const validateUsers = (email, password): boolean => {
    var flag = false;
    auth.forEach((user) => {
      if (
        user.email.trim().toString() === email &&
        user.password.trim().toString() === password
      ) {
        if (user.role.trim().toString() === "student") {
          dispatch(mVerifyAuthenticationStudent(user.role.trim().toString()));
        } else if (user.role.trim().toString() === "teacher") {
          dispatch(mVerifyAuthenticationTeacher(user.role.trim().toString()));
        } else {
          dispatch(mVerifyAuthenticationAdmin(user.role.trim().toString()));
        }

        flag = true;
      }
    });

    return flag;
  };
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handlerShowPassword = (): void => {
    setShowPassword(!showPassword);
    setIsLoading(false);
  };

  return (
    <div className={`login ${theme_global.theme}`}>
      <div className="login-card">
        <div className="login-image">
          <h2>TEMONET</h2>
          <img id="image-login" src={loginImage} alt="login" />
        </div>
        <img id="plane-login" src={plane} alt="plane_one" />
        <SwitchTheme />
        <div className="login-form">
          <h2>Hola,</h2>
          <h2>Bienvenido</h2>
          <Form className="form-data" onSubmit={onSubmit} onChange={onChange}>
            <Form.Field>
              <h3>Ingrese su correo electrónico</h3>
              <Input
                type="text"
                name="email"
                placeholder="Correo Electrónico"
                icon="mail outline"
                error={formError.email}
              />
              {formError.email && (
                <span className="error-text">
                  Por favor, introduce un correo electrónico válido.{" "}
                </span>
              )}
            </Form.Field>
            <Form.Field>
              <h3>Ingrese su contraseña</h3>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                error={formError.password}
                icon={
                  showPassword ? (
                    <Icon
                      name="eye slash outline"
                      link
                      onClick={handlerShowPassword}
                    />
                  ) : (
                    <Icon name="eye" link onClick={handlerShowPassword} />
                  )
                }
              />
              {formError.password && (
                <span className="error-text">
                  Por favor, elige una contraseña superior a 5 caracteres.{" "}
                </span>
              )}
            </Form.Field>
            <div className="square-login">
              <Button
                className={`btnRegister ${theme_global.theme}`}
                onClick={() => {
                  history.push("/signup");
                }}
                loading={isLoading}
              >
                Registrarse
              </Button>
              <Button
                className={`btnLogin ${theme_global.theme}`}
                type="submit"
                onClick={() => {
                  onSubmit();
                }}
                loading={isLoading}
              >
                Iniciar Sesión
              </Button>
            </div>
            <span className="forget-password">¿Olvidó su contraseña?</span>
          </Form>
          <div className="footer-login">
            <h2>Simple, rápido y seguro</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function defaultValueForm() {
  return {
    email: "",
    password: "",
  };
}

export default connect()(Login);
