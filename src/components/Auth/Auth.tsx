import React from "react";
import { connect, useSelector } from "react-redux";
import LoggedLayout from "../../layouts/LoggedLayout";
import PublicLayout from "../../layouts/PublicLayout";

function Auth() {
  const authenticate_global = useSelector(
    (state: any) => state.authenticate_global
  );

  const isAuthenticate = JSON.parse(sessionStorage.getItem("isAuth")!);
  console.log(`IsAuth ${authenticate_global.authenticate}`);
  return (
    <>
      {isAuthenticate ? (
        <LoggedLayout auth={isAuthenticate} />
      ) : (
        <PublicLayout />
      )}
    </>
  );
}

export default connect()(Auth);
