import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import classes from "./ContentBlock.module.css";

const ContentBlock = (props) => {
  const match = useRouteMatch();

  return (
    <h5 className={classes.listItemTitle}>
      <Link to={`${match.url}${props.title}`}>{props.title}</Link>
    </h5>
  );
};

export default ContentBlock;
