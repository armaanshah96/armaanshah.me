import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import classes from "./PageTitle.module.css";
import { myName, home } from "../../utils/constants";
import siteData from "../../data/siteData";

const PageTitle = (props) => {
  const match = useRouteMatch();
  const titleTag = props.isHomepage ? (
    <Link to={`${match.url}${myName}`} className={classes.noDecoration}>
      {myName}
    </Link>
  ) : (
    props.navigation.path[props.navigation.path.length - 1]
  );

  const subtitle = props.isHomepage
    ? siteData[home].subtitle
    : siteData[props.navigation.path[props.navigation.path.length - 1]]
        .subtitle;

  return (
    <div className={classes.pageTitle}>
      <h4 className={classes.title}>{titleTag}</h4>
      <p className={classes.subtitle}>{subtitle}</p>
    </div>
  );
};

export default PageTitle;
