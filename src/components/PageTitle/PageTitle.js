import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

import classes from "./PageTitle.module.css";
import siteData from "../../data/siteData";
import { myName, home } from "../../utils/constants";
import { currentPage } from "../../utils/routeUtil";

const PageTitle = (props) => {
  const match = useRouteMatch();
  const titleTag = props.isHomepage ? (
    <Link to={`${match.url}${myName}`} className={classes.noDecoration}>
      {myName}
    </Link>
  ) : (
    siteData[currentPage(props.navigation.path)].title
  );

  const subtitle = props.isHomepage
    ? siteData[home].subtitle
    : siteData[currentPage(props.navigation.path)].subtitle;

  return (
    <div className={classes.pageTitle}>
      <h4 className={classes.title}>{titleTag}</h4>
      <p className={classes.subtitle}>{subtitle}</p>
    </div>
  );
};

export default PageTitle;
