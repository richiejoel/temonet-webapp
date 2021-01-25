import React, { useState } from "react";

import { Button, Icon, Form, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import SwitchTheme from "../../components/SwitchTheme";
import plane from "../../assets/paper_plane.svg";
import registerImage from "../../assets/create-account.svg";

import "./RegisterPage.scss";

export default function RegisterPage(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const history = useHistory();
  const onSubmit = () => {};
  const onChange = () => {};
  const handlerShowPassword = (): void => {
    setShowPassword(!showPassword);
    setIsLoading(false);
  };
  return (
    <div className="register">
      <SwitchTheme />
      <div className="register-card">
        <div className="register-image">
          <h2>TEMONET</h2>
          <img id="image-register" src={registerImage} alt="register" />
        </div>
        <img id="plane-register" src={plane} alt="plane-register" />
        <div className="register-form">
          <h2>Crea tu cuenta</h2>
          <Form
            className="form-data-register"
            onSubmit={onSubmit}
            onChange={onChange}
          >
            <Form.Field>
              <h3>Ingrese sus nombres</h3>
              <Input
                type="text"
                name="names"
                placeholder="Nombres"
                icon="mail outline"
              />
            </Form.Field>
            <Form.Field>
              <h3>Ingrese sus apellidos</h3>
              <Input
                type="text"
                name="lastName"
                placeholder="Apellidos"
                icon="mail outline"
              />
            </Form.Field>
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
            <div className="square-register">
              <span
                onClick={() => {
                  history.push("/signin");
                }}
              >
                ¿Ya tienes una cuenta?
              </span>
              <Button type="submit" loading={isLoading}>
                Registrarse
              </Button>
            </div>
          </Form>
          <div className="footer-register">
            <h2>La mejor plataforma online</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
