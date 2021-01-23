import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import loginImage from "../../assets/login-image.svg";
import { Button, Icon, Form, Input } from "semantic-ui-react";

import "./Login.scss";

function Login(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit = () => {};
  const onChange = () => {};
  const handlerShowPassword = (): void => {
    setShowPassword(!showPassword);
    setIsLoading(false);
  };
  return (
    <div className="login">
      <div className="login-card">
        <div className="login-image">
          <img id="image-login" src={loginImage} alt="login" />
        </div>
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
              <span>¿Olvidó su contraseña?</span>
              <Button type="submit" loading={isLoading}>
                Iniciar Sesión
              </Button>
            </div>
          </Form>
          <div className="footer-login">
            <h2>Simple, rápido y seguro</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
