import React from "react";

import classes from "./Label.module.css";

const Label = (props) => {
  const colorClassStyle = props.isStatus ? classes.Status : classes.Tag;
  return props.tag ? (
    <div className={[classes.Label, colorClassStyle].join(" ")}>
      {props.tag}
    </div>
  ) : null;
};

export default Label;
