import React, { Fragment } from 'react';

const Breadcrumb = (props) => {
  return (
    <Fragment>
      <li>→</li>
      <li className={props.classStyle}>{props.name}</li>
    </Fragment>
  );
};

export default Breadcrumb;
