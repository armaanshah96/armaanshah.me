import React from "react";
import siteData from "../data/siteData";
import ContentBlock from "./ContentBlock";

const ContentBlocks = (props) => {
  return (
    <div>
      {siteData[props.page].content.map((items) => (
        <ContentBlock key={items.title} title={items.title} />
      ))}
    </div>
  );
};

export default ContentBlocks;
