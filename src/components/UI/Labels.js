import React from "react";
import Label from "./Label";

const Labels = (props) => {
  return props.tags
    ? props.tags.map((tag) => <Label key={tag} tag={tag}></Label>)
    : null;
};

export default Labels;
