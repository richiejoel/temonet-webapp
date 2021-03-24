import React from "react";
import { Grid } from "semantic-ui-react";
import { connect, useSelector } from "react-redux";
import Male from "../../assets/svg/teacher-male.svg";
import Hero from "../../assets/svg/teacher-hero.svg";
import Female from "../../assets/svg/teacher-female.svg";
import "./ListTeachers.scss";
import "../../styles/theme.scss";

function ListTeachers(): JSX.Element {
  const theme_global = useSelector((state: any) => state.theme_global);
  return (
    <div className={`teachers ${theme_global.theme}`}>
      <h1>Lista de Logopedas</h1>
      <Grid>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Male} alt="avatar_teacher" />
            <h3>Pepito Piguave</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Female} alt="avatar_teacher" />
            <h3>Michell Campaña</h3>
          </div>
        </Grid.Column>
        {/*<Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Hero} alt="avatar_teacher" />
            <h3>Stefania Martillo</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Female} alt="avatar_teacher" />
            <h3>Pepito Piguave</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Male} alt="avatar_teacher" />
            <h3>Louis Velez</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Hero} alt="avatar_teacher" />
            <h3>Mary Lopez</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Male} alt="avatar_teacher" />
            <h3>Harry Styles</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Female} alt="avatar_teacher" />
            <h3>Abel Garcia</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Hero} alt="avatar_teacher" />
            <h3>Selena Gomez</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Female} alt="avatar_teacher" />
            <h3>Ariana Grande</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Male} alt="avatar_teacher" />
            <h3>Justin Bieber</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Hero} alt="avatar_teacher" />
            <h3>Carlos Andrade</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Male} alt="avatar_teacher" />
            <h3>Barbara Palvin</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Female} alt="avatar_teacher" />
            <h3>Enrique Valdez</h3>
          </div>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={4} computer={3}>
          <div className="teachers__item">
            <img className="avatar_teacher" src={Hero} alt="avatar_teacher" />
            <h3>Amy López</h3>
          </div>
  </Grid.Column>*/}
      </Grid>
    </div>
  );
}

export default connect()(ListTeachers);
