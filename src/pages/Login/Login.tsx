import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import SwitchTheme from "../../components/SwitchTheme";
import plane from "../../assets/paper_plane.svg";
import loginImage from "../../assets/login-image.svg";

import "./Login.scss";
import "../../styles/theme.scss";

function Login(): JSX.Element {
  const theme_global = useSelector((state: any) => state.theme_global);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const history = useHistory();
  const onSubmit = () => {
    history.push("/");
  };
  const onChange = () => {};
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
              />
            </Form.Field>
            <Form.Field>
              <h3>Ingrese su contraseña</h3>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
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

export default connect()(Login);
