import React from "react";
import { connect, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";
import PageNotFound from "../pages/PageNotFound";
import MultiplesActivities from "../pages/MultiplesActivities/MultiplesActivities";
import Lesson from "../pages/Lesson";
import CreateLessonCard from "../pages/CreateLessonCard";
import CreateLessonVideo from "../pages/CreateLessonVideo";
import CreateLessonAudio from "../pages/CreateLessonAudio";
import LoggedLayout from "../layouts/LoggedLayout";
import Example from "../components/Example";
import EnrollmentStudent from "../pages/EnrollmentStudent";
import EnrollmentTeacher from "../pages/EnrollmentTeacher";
import ListStudents from "../pages/ListStudents";
import ListTeachers from "../pages/ListTeachers";
import LessonFinished from "../components/LessonFinished";
import LessonReady from "../pages/LessonReady";

var state_global;
function Routes() {
  const authenticate_global = useSelector((state) => state.authenticate_global);
  state_global = authenticate_global;
  return (
    <Switch>
      <PrivateRoute path="/" exact>
        <Home />
      </PrivateRoute>
      <PrivateRoute path="/question" exact>
        <MultiplesActivities />
      </PrivateRoute>
      <PrivateRoute path="/lesson" exact>
        <Lesson />
      </PrivateRoute>
      <PrivateRoute path="/createLesson" exact>
        <CreateLessonCard />
      </PrivateRoute>
      <PrivateRoute path="/createLessonVideo" exact>
        <CreateLessonVideo />
      </PrivateRoute>
      <PrivateRoute path="/createLessonAudio" exact>
        <CreateLessonAudio />
      </PrivateRoute>
      <PrivateRoute path="/enrollmentStudent" exact>
        <EnrollmentStudent />
      </PrivateRoute>
      <PrivateRoute path="/enrollmentTeacher" exact>
        <EnrollmentTeacher />
      </PrivateRoute>
      <PrivateRoute path="/getAllStudents" exact>
        <ListStudents />
      </PrivateRoute>
      <PrivateRoute path="/getAllTeachers" exact>
        <ListTeachers />
      </PrivateRoute>
      <PrivateRoute path="/lessonReady" exact>
        <LessonReady />
      </PrivateRoute>
      <PrivateRoute path="/lessonFinished" exact>
        <LessonFinished />
      </PrivateRoute>
      <PublicRoute path="/signin" exact>
        <Login />
      </PublicRoute>
      <PublicRoute path="/signup" exact>
        <RegisterPage />
      </PublicRoute>
      <Route path="/example" exact>
        <Example />
      </Route>
      <Route path="*" exact>
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default connect()(Routes);

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/signin" />} />
    <Route path="/signin" component={Login} />
    <Route path="/signup" component={RegisterPage} />
  </div>
);

const DefaultContainer = () => (
  <div className="container">
    <LoggedLayout />
    <PrivateRoute path="/" exact>
      <Home />
    </PrivateRoute>
    <PrivateRoute path="/question" exact>
      <MultiplesActivities />
    </PrivateRoute>
  </div>
);

function PrivateRoute({ children, ...rest }, props) {
  const location = useLocation();
  console.log(`${state_global.authenticate}`);
  const isAuth = JSON.parse(sessionStorage.getItem("isAuth"));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ children, ...rest }) {
  const authenticate_global = useSelector((state) => state.authenticate_global);
  const location = useLocation();
  console.log(authenticate_global.authenticate);
  const auth = JSON.parse(sessionStorage.getItem("isAuth"));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth && (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
