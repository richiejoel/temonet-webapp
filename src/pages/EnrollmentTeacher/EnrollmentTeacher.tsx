//EnrollmentTeacher
import React, { useState, useEffect } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { toast } from "react-toastify";
import { connect, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { validateEmail } from "../../utils/Validations";
import NoAvatar from "../../assets/svg/female.svg";

import "./EnrollmentTeacher.scss";
import "../../styles/theme.scss";

function EnrollmentTeacher(): JSX.Element {
  const theme_global = useSelector((state: any) => state.theme_global);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState(defaultValueForm());
  const [files, setFiles] = useState<any>([]);
  const [estado, setEstado] = useState("show-img");
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      setEstado("hide-img");
    },
  });
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
      toast.success("Ha inscrito al logopeda con éxito! 🚀");
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

  const thumbs: JSX.Element = files.map((file) => (
    <div className={`thumb-std`} key={file.name}>
      <div className={`thumbInner-std`}>
        <img src={file.preview} className={`img-std`} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div>
      <div className="enrollment-teacher-form">
        <h2>Crear Logopedas</h2>
        <Form
          className="enrollment-teacher-form-data"
          onSubmit={onSubmit}
          onChange={onChange}
        >
          <Form.Field>
            <div className="container-teacher">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <img id={estado} className="img-drop-teacher" src={NoAvatar} />
                {!thumbs ? (
                  <img className="img-drop-teacher" src={NoAvatar} />
                ) : (
                  <div className={`thumbsContainer-teacher`}>{thumbs}</div>
                )}
              </div>
            </div>
          </Form.Field>
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
              error={formError.date}
            />
            {formError.date && (
              <span className="error-text">
                Por favor, introduce una fecha correcta.{" "}
              </span>
            )}
          </Form.Field>
          <Form.Field>
            <h3>Ingrese el nivel de educación del Logopeda</h3>
            <Input
              type="text"
              name="scote"
              placeholder="Nivel educación"
              icon="mail outline"
              error={formError.score}
            />
            {formError.score && (
              <span className="error-text">
                Por favor, introduce un semestre correcto.{" "}
              </span>
            )}
          </Form.Field>
          <div className="square-enrollment-teacher">
            <Button
              className={`btnEnrollmentTeacher ${theme_global.theme}`}
              type="submit"
              loading={isLoading}
            >
              Inscribir Logopeda
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

export default connect()(EnrollmentTeacher);
