import React from 'react';
import { Route } from 'react-router-dom';

import siteData from "../../data/siteData";
import { currentPage } from "../../utils/routeUtil";
import ContentBlocks from '../ContentBlocks/ContentBlocks';

const CurrentRoute = (props) => (
    <Route
      exact
      path={`/${props.pathArray.join("/")}`}
      render={() => (
        <ContentBlocks page={siteData[currentPage(props.pathArray)].title} />
      )}
    />
);

export default CurrentRoute;