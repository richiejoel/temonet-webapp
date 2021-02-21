import React from "react";
import { Icon, Input, Image } from "semantic-ui-react";

import ImageAvatar from "../../assets/svg/female.svg";
import ImageLogo from "../../assets/svg/graduation.svg";

import "./TobBar.scss";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar__left">
        <h2>TEMONET</h2>
        <img id="image-logo" src={ImageLogo} alt="logo" />
      </div>
      <div className="top-bar__center">
        <Input
          id="search"
          type="text"
          name="search"
          placeholder="Buscar"
          icon={<Icon name="search" />}
        />
      </div>
      <div className="top-bar__right">
        <Icon className="bell" name="bell outline" size="big" />
        <span className="name-user">{sessionStorage.getItem("username")}</span>
        <Image className="user-profile" src={ImageAvatar} />
      </div>
    </div>
  );
}
