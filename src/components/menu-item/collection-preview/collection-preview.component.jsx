import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-items/collection-item-component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...ortherItemprops }) => (
            <CollectionItem key={id} {...ortherItemprops} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
