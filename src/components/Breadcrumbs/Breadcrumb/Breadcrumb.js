import React, { Fragment } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Breadcrumb = (props) => {
  const match = useRouteMatch();
  const maybeLink = props.isLast ? (
    props.name
  ) : (
    <Link to={`${match.url}${props.name}`}>{props.name}</Link>
  );

  return (
    <Fragment>
      <li>→</li>
      <li className={props.classStyle}>{maybeLink}</li>
    </Fragment>
  );
};

export default Breadcrumb;
