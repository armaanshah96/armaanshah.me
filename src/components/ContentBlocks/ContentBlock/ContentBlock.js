import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import classes from "./ContentBlock.module.css";
import Labels from "../../UI/Labels";
import Label from "../../UI/Label";
import References from "./References/References";

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
      <Label isStatus={true} tag={props.status} />
      <Labels tags={props.tag} />
      <p className={classes.paragraph}>{props.body}</p>
      <References links={props.references} />
    </div>
  );
};

export default ContentBlock;
