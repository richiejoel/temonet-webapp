import React, { useState, useEffect } from "react";
import {
  Button,
  Icon,
  Form,
  Input,
  Dropdown,
  TextArea,
} from "semantic-ui-react";
import { toast } from "react-toastify";
import { connect, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { validateEmail } from "../../utils/Validations";
import NoAvatar from "../../assets/svg/female.svg";
import Male from "../../assets/svg/teacher-male.svg";
import Hero from "../../assets/svg/teacher-hero.svg";
import Female from "../../assets/svg/teacher-female.svg";
import MaleTwo from "../../assets/svg/male.svg";

import "./EnrollmentStudent.scss";
import "../../styles/theme.scss";

function EnrollmentStudent(): JSX.Element {
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
      toast.success("Ha matriculado al estudiante con éxito! 🚀");
    } else {
      toast.error("Problemas de validación 😥");
    }
  };

  const teacherOptions = [
    {
      key: "Jenny Hess",
      text: "Jenny Hess",
      value: "Jenny Hess",
      image: { avatar: true, src: NoAvatar },
    },
    {
      key: "Elliot Fu",
      text: "Elliot Fu",
      value: "Elliot Fu",
      image: { avatar: true, src: Male },
    },
    {
      key: "Stevie Feliciano",
      text: "Stevie Feliciano",
      value: "Stevie Feliciano",
      image: { avatar: true, src: Hero },
    },
    {
      key: "Christian",
      text: "Christian",
      value: "Christian",
      image: { avatar: true, src: Female },
    },
    {
      key: "Matt",
      text: "Matt",
      value: "Matt",
      image: { avatar: true, src: MaleTwo },
    },
    {
      key: "Justen Kitsune",
      text: "Justen Kitsune",
      value: "Justen Kitsune",
      image: { avatar: true, src: Male },
    },
  ];

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
      <div className={`enrollment-student-form ${theme_global.theme}`}>
        <h2>Matricular Estudiantes</h2>
        <Form
          className="enrollment-student-form-data"
          onSubmit={onSubmit}
          onChange={onChange}
        >
          <Form.Field>
            <div className="container-std">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <img id={estado} className="img-drop-std" src={NoAvatar} />
                {!thumbs ? (
                  <img className="img-drop-std" src={NoAvatar} />
                ) : (
                  <div className={`thumbsContainer-std`}>{thumbs}</div>
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
            <h3>Ingrese el nivel académico</h3>
            <Input
              type="text"
              name="scote"
              placeholder="Nivel académico"
              icon="mail outline"
              error={formError.score}
            />
            {formError.score && (
              <span className="error-text">
                Por favor, introduce un año escolar correcto.{" "}
              </span>
            )}
          </Form.Field>
          <Form.Field>
            <h3>Ingrese el logopeda</h3>
            <Dropdown
              placeholder="Seleccione terapeuta"
              fluid
              selection
              options={teacherOptions}
              error={formError.score}
            />
            {formError.score && (
              <span className="error-text">
                Por favor, introduce el motivo de la terapia.{" "}
              </span>
            )}
          </Form.Field>
          <Form.Field>
            <h3>Detalle los hábitos diarios del estudiante</h3>
            <TextArea placeholder="Hábitos del estudiante" />
          </Form.Field>
          <Form.Field>
            <h3>Ingrese el motivo de la terapia</h3>
            <TextArea placeholder="Motivo de la terapia" />
          </Form.Field>
          <div className="square-enrollment-student">
            <Button
              className={`btnEnrollmentStudent ${theme_global.theme}`}
              type="submit"
              loading={isLoading}
            >
              Matricular estudiante
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
