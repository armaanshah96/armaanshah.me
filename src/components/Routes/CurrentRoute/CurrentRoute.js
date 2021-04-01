import React from "react";
import { Route } from "react-router-dom";

import { currentPage } from "../../../utils/routeUtil";
import ContentBlocks from "../../ContentBlocks/ContentBlocks";

const CurrentRoute = (props) => (
  <Route
    exact
    path={`/${props.pathArray.join("/")}`}
    render={() => <ContentBlocks page={currentPage(props.pathArray)} />}
  />
);

export default CurrentRoute;
