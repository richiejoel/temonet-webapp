import React from "react";
import { Button } from "semantic-ui-react";

import Card from "../components/Card";
import plane from "../assets/paper_plane.svg";

import "./Home.scss";

function Home(): JSX.Element {
  return (
    <div className="home">
      <div className="home-top">
        <h1>TEMONET</h1>
        <h2>
          Mi escuela de <span>Terapias</span>
        </h2>
        <img id="plane-one" src={plane} alt="plane_one" />
        <div className="resume">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>
        <div>
          <Button className="btn-home">Iniciar Programa</Button>
        </div>
      </div>
      <div className="subtitle">
        <h2>Mi escuela</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="home-bottom">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
    </div>
  );
}

export default Home;
