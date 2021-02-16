import React from "react";
import { connect, useSelector } from "react-redux";
import LoggedLayout from "../../layouts/LoggedLayout";
import PublicLayout from "../../layouts/PublicLayout";

function Auth() {
  const authenticate_global = useSelector(
    (state: any) => state.authenticate_global
  );
  let isAuth = authenticate_global.authenticate;
  return <>{!isAuth ? <PublicLayout /> : <LoggedLayout auth={isAuth} />}</>;
}

export default connect()(Auth);
