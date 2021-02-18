import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { connect, useSelector } from "react-redux";
import { validateEmail } from "../../utils/Validations";

function EnrollmentStudent(): JSX.Element {
  const theme_global = useSelector((state: any) => state.theme_global);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState(defaultValueForm());
  const [formError, setFormError] = useState({
    email: false,
    password: false,
    name: false,
    cedula: false,
    score: false,
    date: false,
  });

  const onSubmit = () => {
    setFormError({
      email: false,
      password: false,
      name: false,
      cedula: false,
      score: false,
      date: false,
    }); //Se limpia objeto errores
    let errors = {
      email: false,
      password: false,
      name: false,
      cedula: false,
      score: false,
      date: false,
    };
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
      toast.success("Ha matriculado al estudiante con éxito! 🚀");
    } else {
      toast.error("Problemas de validación 😥");
    }
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
    <div>
      <div className="enrollment-student-form">
        <h2>Matricular Estudiantes</h2>
        <Form
          className="enrollment-student-form-data"
          onSubmit={onSubmit}
          onChange={onChange}
        >
          <Form.Field>
            <h3>Ingrese el nombre completo</h3>
            <Input
              type="text"
              name="name"
              placeholder="Nombre completo"
              icon="mail outline"
              error={formError.name}
            />
            {formError.name && (
              <span className="error-text">
                Por favor, introduce un nombre completo.{" "}
              </span>
            )}
          </Form.Field>
          <Form.Field>
            <h3>Ingrese el número de cédula</h3>
            <Input
              type="text"
              name="cedula"
              placeholder="Cedula"
              icon="mail outline"
              error={formError.cedula}
            />
            {formError.cedula && (
              <span className="error-text">
                Por favor, introduce un número de cédula correcto.{" "}
              </span>
            )}
          </Form.Field>
          <Form.Field>
            <h3>Ingrese el correo electrónico</h3>
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
            <h3>Ingrese la contraseña</h3>
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
          <Form.Field>
            <h3>Ingrese la fecha de nacimiento</h3>
            <Input
              type="date"
              name="date"
              placeholder="Fecha de nacimiento"
              icon="mail outline"
              error={formError.date}
            />
            {formError.date && (
              <span className="error-text">
                Por favor, introduce una fecha correcta.{" "}
              </span>
            )}
          </Form.Field>
          <Form.Field>
            <h3>Ingrese el semestre actual</h3>
            <Input
              type="text"
              name="scote"
              placeholder="Score"
              icon="mail outline"
              error={formError.score}
            />
            {formError.score && (
              <span className="error-text">
                Por favor, introduce un semestre correcto.{" "}
              </span>
            )}
          </Form.Field>
          <div className="square-enrollment-student">
            <Button
              className={`btnLogin ${theme_global.theme}`}
              type="submit"
              loading={isLoading}
            >
              Iniciar Sesión
            </Button>
          </div>
        </Form>
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

export default connect()(EnrollmentStudent);
