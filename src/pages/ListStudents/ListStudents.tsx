import React from "react";
import { Grid } from "semantic-ui-react";
import Male from "../../assets/svg/male.svg";
import Female from "../../assets/svg/female.svg";
import "./ListStudents.scss";

function ListStudents(): JSX.Element {
  return (
    <div className="students">
      <h1>Lista de estudiantes</h1>
      <Grid>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Male} alt="avatar_student" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Female} alt="avatar_student" />
            <h3>Stefania Martillo</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Male} alt="avatar_student" />
            <h3>Michell Campaña</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Female} alt="avatar_student" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Male} alt="avatar_student" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Female} alt="avatar_student" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Male} alt="avatar_student" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Female} alt="avatar_student" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Male} alt="avatar_student" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Female} alt="avatar_student" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Male} alt="avatar_student" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Female} alt="avatar_student" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Male} alt="avatar_student" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Female} alt="avatar_student" />
            <h3>Stefania Martillo</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="students__item">
            <img className="avatar_student" src={Male} alt="avatar_student" />
            <h3>Michell Campaña</h3>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default ListStudents;
