import React from 'react';
import { connect, useSelector } from "react-redux";
import { Icon, Table, Header, Image } from 'semantic-ui-react'
import ImgLessonScore from "../../assets/svg/lesson-finished.svg";

import "./Score.scss";
import "../../styles/theme.scss";

function Score(): JSX.Element {
    const theme_global = useSelector((state: any) => state.theme_global);
    return (
        <div className={`score ${theme_global.theme}`}>
            <h1>Calificaciones</h1>
            <div className="contenido">
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Terapia</Table.HeaderCell>
        <Table.HeaderCell>Estado</Table.HeaderCell>
        <Table.HeaderCell>Calificación</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Terapia 1</Table.Cell>
        <Table.Cell positive>
        <Icon name='checkmark' />
          Aprobada
        </Table.Cell>
        <Table.Cell >10</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Terapia 2</Table.Cell>
        <Table.Cell negative>
          <Icon name='x' />
          Reprobado
        </Table.Cell>
        <Table.Cell negative>3</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Terapia 3</Table.Cell>
        <Table.Cell positive>
          <Icon name='checkmark' />
          Aprobado
        </Table.Cell>
        <Table.Cell>8</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Terapia 4</Table.Cell>
        <Table.Cell positive>
          <Icon name='checkmark' />
          Aprobado
        </Table.Cell>
        <Table.Cell>8</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Terapia 5</Table.Cell>
        <Table.Cell negative>
          <Icon name='x' />
          Reprobado
        </Table.Cell>
        <Table.Cell negative>5</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Terapia 6</Table.Cell>
        <Table.Cell positive>
          <Icon name='checkmark' />
          Aprobado
        </Table.Cell>
        <Table.Cell>9</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Terapia 7</Table.Cell>
        <Table.Cell positive>
          <Icon name='checkmark' />
          Aprobado
        </Table.Cell>
        <Table.Cell>9</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Terapia 8</Table.Cell>
        <Table.Cell negative>
          <Icon name='x' />
          Reprobado
        </Table.Cell>
        <Table.Cell negative>3</Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell>Terapia 9</Table.Cell>
        <Table.Cell positive>
          <Icon name='checkmark' />
          Aprobado
        </Table.Cell>
        <Table.Cell>9</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  <img
        id="image-score"
        src={ImgLessonScore}
        alt="lesson-score"
      />
      </div>
    </div>
    

    );
}

export default connect()(Score);
