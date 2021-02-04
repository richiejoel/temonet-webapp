import React from "react";
import { Route } from "react-router-dom";
import RoutesPublic from "../../routes/RoutesPublic";
import { withRouter } from "react-router-dom";

function PublicLayout() {
  return <RoutesPublic />;
}

export default PublicLayout;
