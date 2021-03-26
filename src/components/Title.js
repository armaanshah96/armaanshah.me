import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import classes from './Title.module.css';
import { myName } from '../utils/constants';

const PageTitle = props => {
  const match = useRouteMatch();
  const titleTag = props.isHomepage
    ? <Link to={`${match.url}${myName}`} className={classes.noDecoration}>{myName}</Link>
    : props.navigation.path[props.navigation.path.length-1];

  return <h4 className={classes.title}>{titleTag}</h4>;
};

export default PageTitle;
