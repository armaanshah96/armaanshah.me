import React from 'react';
import classes from './Title.module.css';

const PageTitle = props => {
  const titleTag = props.isHomepage
    ? myName
    : props.navigation.path[props.navigation.path.length-1];

  return <h4 className={classes.title}>{titleTag}</h4>;
};

const myName = 'armaan';

export default PageTitle;
