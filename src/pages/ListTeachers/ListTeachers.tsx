import React from "react";
import { Grid } from "semantic-ui-react";
import Male from "../../assets/svg/teacher-male.svg";
import Hero from "../../assets/svg/teacher-hero.svg";
import Female from "../../assets/svg/teacher-female.svg";
import "./ListTeachers.scss";

function ListTeachers(): JSX.Element {
  return (
    <div className="teachers">
      <h1>Lista de Logopedas</h1>
      <Grid>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Male} alt="avatar_teacher" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Female} alt="avatar_teacher" />
            <h3>Stefania Martillo</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Hero} alt="avatar_teacher" />
            <h3>Michell Campaña</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Female} alt="avatar_teacher" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Male} alt="avatar_teacher" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Hero} alt="avatar_teacher" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Male} alt="avatar_teacher" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Female} alt="avatar_teacher" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Hero} alt="avatar_teacher" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Female} alt="avatar_teacher" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Male} alt="avatar_teacher" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Hero} alt="avatar_teacher" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Male} alt="avatar_teacher" />
            <h3>Joel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Female} alt="avatar_teacher" />
            <h3>Stefania Martillo</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Hero} alt="avatar_teacher" />
            <h3>Michell Campaña</h3>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default ListTeachers;
