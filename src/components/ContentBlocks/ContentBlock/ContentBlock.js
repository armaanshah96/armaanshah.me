import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import classes from "./ContentBlock.module.css";
import Label from "../../UI/Label";

const ContentBlock = (props) => {
  const match = useRouteMatch();
  let maybeLink = props.title;

  if (props.link !== null) {
    if (props.isExternalLink) {
      maybeLink = <a href={props.link}>{props.title}</a>;
    } else {
      maybeLink = <Link to={`${match.url}${props.link}`}>{props.title}</Link>;
    }
  }

  return (
    <div className={classes.listItem}>
      <h5 className={classes.listItemTitle}>{maybeLink}</h5>
      {props.tag && <Label tag={props.tag} />}
      <p className={classes.paragraph}>{props.body}</p>
    </div>
  );
};

export default ContentBlock;
