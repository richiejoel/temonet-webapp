import React from "react";
import { Grid } from "semantic-ui-react";
import { connect, useSelector } from "react-redux";
import Male from "../../assets/svg/male.svg";
import Female from "../../assets/svg/female.svg";
import "./ListStudents.scss";
import "../../styles/theme.scss";

function ListStudents(): JSX.Element {
  const theme_global = useSelector((state: any) => state.theme_global);
  return (
    <div className={`students ${theme_global.theme}`}>
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

export default connect()(ListStudents);
