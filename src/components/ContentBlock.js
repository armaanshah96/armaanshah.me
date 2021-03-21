import React from "react";
import classes from "./ContentBlock.module.css";

const ContentBlock = (props) => {
  return <h5 className={classes.listItemTitle}>{props.title}</h5>;
};

export default ContentBlock;
