import React from "react";

import classes from "./Label.module.css";

const Label = (props) => props.tags.map(tag => <div className={classes.Label}>{tag}</div>);

export default Label;
