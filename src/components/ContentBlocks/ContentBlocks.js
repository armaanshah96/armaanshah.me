import React from "react";
import siteData from "../../data/siteData";
import ContentBlock from "./ContentBlock/ContentBlock";

const ContentBlocks = (props) => {
  return (
    <div>
      {siteData[props.page].content.map((items) => (
        <ContentBlock key={items.title} {...items} />
      ))}
    </div>
  );
};

export default ContentBlocks;
