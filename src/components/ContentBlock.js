import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import classes from "./ContentBlock.module.css";

const ContentBlock = (props) => {
  const match = useRouteMatch();
  const link = props.isExternalLink ? (
    <a href={props.link}>{props.title}</a>
  ) : (
    <Link to={`${match.url}${props.link}`}>{props.title}</Link>
  );

  return <h5 className={classes.listItemTitle}>{link}</h5>;
};

export default ContentBlock;
