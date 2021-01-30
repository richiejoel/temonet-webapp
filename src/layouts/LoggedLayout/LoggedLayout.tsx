import React from "react";
import { Grid } from "semantic-ui-react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes/Routes";
import MenuLeft from "../../components/MenuLeft";
import TopBar from "../../components/TopBar";
import SwitchTheme from "../../components/SwitchTheme";

import "./LoggedLayout.scss";

export default function LoggedLayout() {
  return (
    <Router>
      <Grid className="logged-layout">
        <Grid.Row>
          <Grid.Column width={2}>
            <MenuLeft />
          </Grid.Column>
          <Grid.Column className="content" width={14}>
            <TopBar />
            <Routes />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Router>
  );
}
