import React from "react";
import { Route } from "react-router-dom";

import siteData from "../../../data/siteData";
import { currentPage } from "../../../utils/routeUtil";
import ContentBlocks from "../../ContentBlocks/ContentBlocks";

const DynamicRoutes = (props) => {
  return siteData[currentPage(props.pathArray)].content.map((item) =>
    item.isExternalLink === false && item.link !== null ? (
      <Route
        key={item.title}
        path={`${props.match.url}${item.link}`}
        render={() => <ContentBlocks page={item.title} />}
      />
    ) : null
  );
};

export default DynamicRoutes;
