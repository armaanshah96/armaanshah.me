import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { constructPathArray, isHomepage } from "./utils/routeUtil";
import PageTitle from "./components/PageTitle/PageTitle";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ContentBlocks from "./components/ContentBlocks/ContentBlocks";
import CurrentRoute from "./components/Routes/CurrentRoute/CurrentRoute";
import DynamicRoutes from "./components/Routes/Dynamic Routes/DynamicRoutes";

const App = (props) => {
  const [navigationState, setNavigationState] = useState({
    path: constructPathArray(props.location.pathname),
  });

  useEffect(() => {
    const path = constructPathArray(props.location.pathname);
    setNavigationState({
      path: path,
    });
  }, [props.location.pathname]);

  return (
    <div>
      <Breadcrumbs
        navigation={navigationState}
        isHomepage={isHomepage(navigationState.path)}
      />
      <PageTitle
        navigation={navigationState}
        isHomepage={isHomepage(navigationState.path)}
      />
      <Switch>
        <Route
          exact
          path="/armaan"
          render={() => <ContentBlocks page="armaan" />}
        />
        <CurrentRoute pathArray={navigationState.path} />
        <DynamicRoutes pathArray={navigationState.path} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
