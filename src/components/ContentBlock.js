import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import classes from "./ContentBlock.module.css";

const ContentBlock = (props) => {
  const match = useRouteMatch();
  let link = <Link to={`${match.url}${props.link}`}>{props.title}</Link>;

  if (props.link === undefined) {
    link = props.title;
  } else if (props.isExternalLink) {
    link = <a href={props.link}>{props.title}</a>;
  }

  return <h5 className={classes.listItemTitle}>{link}</h5>;
};

export default ContentBlock;
