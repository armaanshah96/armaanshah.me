import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import PageTitle from "./components/Title";
import Breadcrumbs from "./components/Breadcrumbs";
import ContentBlocks from "./components/ContentBlocks";
import { Route, Switch, withRouter } from "react-router-dom";
import siteData from "./data/siteData";

const App = props => {
  const [navigationState, setNavigationState] = useState({
    path: constructPathArray(props.location.pathname),
  });

  useEffect(() => {
    const path = constructPathArray(props.location.pathname)
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
        <Route exact path="/" render={() => <ContentBlocks page="home" />} />
        {currentRoute(navigationState.path)}
        {siteData[currentPage(navigationState.path)].content.map(
          (items, index) =>
            items.title !== "home" && (
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

const constructPathArray = pathname => pathname.split("/").filter((el) => el.length);
const isHomepage = (url) => url === "/";
const currentPage = (pathArray) => {
  if (pathArray.length === 0) {
    return "home";
  }
  return pathArray[pathArray.length - 1];
};
const currentRoute = (pathArray) => {
  return <Route exact path={`/${pathArray.join("/")}`} render={() => <ContentBlocks page={siteData[currentPage(pathArray)].title} />} />
}

export default withRouter(App);
