import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import classes from "./Breadcrumbs.module.css";
import Breadcrumb from "./Breadcrumb";

const Breadcrumbs = (props) => {
  const match = useRouteMatch();
  const maybeHomeLink =
    props.navigation.path.length === 0 ? (
      home
    ) : (
      <Link to={`${match.url}`}>{home}</Link>
    );

  return (
    <nav className={classes.Breadcrumbs}>
      <ul className={classes.list}>
        <li className={classes.listItem}>{maybeHomeLink}</li>
        {props.navigation.path.map((breadcrumb, index) => (
          <Breadcrumb
            key={breadcrumb}
            isLast={props.navigation.path.length - 1 === index}
            classStyle={classes.listItem}
            name={breadcrumb}
          />
        ))}
      </ul>
    </nav>
  );
};

const home = "home";

export default Breadcrumbs;
