import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import classes from "./App.module.css";
import siteData from "./data/siteData";
import {
  constructPathArray,
  isHomepage,
  currentPage,
} from "./utils/routeUtil";
import PageTitle from "./components/Title";
import Breadcrumbs from "./components/Breadcrumbs";
import ContentBlocks from "./components/ContentBlocks";
import CurrentRoute from "./components/CurrentRoute";

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
    <div className={classes.App}>
      <Breadcrumbs
        navigation={navigationState}
        isHomepage={isHomepage(props.location.pathname)}
      />
      <PageTitle
        navigation={navigationState}
        isHomepage={isHomepage(props.location.pathname)}
      />
      <Switch>
        <Route
          exact
          path="/armaan"
          render={() => <ContentBlocks page="armaan" />}
        />
        <CurrentRoute pathArray={navigationState.path} />
        {siteData[currentPage(navigationState.path)].content.map(
          (items, index) => (
            <Route
              key={index}
              path={`${props.match.url}${items.title}`}
              render={() => <ContentBlocks page={items.title} />}
            />
          )
        )}
      </Switch>
    </div>
  );
};

export default withRouter(App);
