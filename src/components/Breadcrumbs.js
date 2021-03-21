import React from "react";
import classes from './Breadcrumbs.module.css';

const breadcrumbs = () => {
  return (
    <nav className={classes.Breadcrumbs}>
      <ul className={classes.list}>
        <li>home</li>
      </ul>
    </nav>
  );
};

export default breadcrumbs;
