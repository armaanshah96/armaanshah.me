import React from 'react';
import classes from './Breadcrumbs.module.css';
import Breadcrumb from './Breadcrumb';

const Breadcrumbs = (props) => {
  return (
    <nav className={classes.Breadcrumbs}>
      <ul className={classes.list}>
        <li className={classes.listItem}>{home}</li>
        {props.navigation.path.map((breadcrumb) => (
          <Breadcrumb key={breadcrumb} classStyle={classes.listItem} name={breadcrumb} />
        ))}
      </ul>
    </nav>
  );
};

const home='home'

export default Breadcrumbs;
