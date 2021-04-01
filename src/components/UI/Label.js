import React from "react";

import classes from "./Label.module.css";

const Label = (props) => <div className={classes.Label}>{props.tag}</div>;

export default Label;
