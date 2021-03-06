import React from 'react';
import {connect} from "react-redux";

import CollectionItem from "../../components/menu-item/collection-items/collection-item-component";
import memoize from 'lodash.memoize';
import {selectCollection} from "../../redux/shop/shop.selector";
import "./collection.styles.scss";

const Collectionpage = ({collection}) => {
  console.log(collection);
    const {title, items} = collection;
    return (
        <div className="collection-page">
          <h2 className="title">{title}</h2>
          <div className="items">
            {
              items.map(item => < CollectionItem key={item.id} item={item} />)
            }
          </div>
        </div>
      );
}

const mapStateToProps = (state, ownProps) => (
  console.log(ownProps.match.params.collectionId),
  {
  collection : selectCollection(ownProps.match.params.collectionId)(state)
});
 
export default connect(mapStateToProps)(Collectionpage);