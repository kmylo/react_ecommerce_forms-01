import React from "react";

import CollectionItem from "../Collection-item/Collection-item";

import "./Collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collectionPreview">
    <div className="title">{title}</div>
    <div className="preview">
      {items
        .filter((item, i) => i < 3)
        .map((item, i) => (
          <CollectionItem key={i} {...item} />
          // <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
