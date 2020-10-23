import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {Collectionselector} from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/menu-item/collection-preview/collection-preview.component";

import "./collections-overview.style.scss";

const CollectionsOverview = ({collections}) => {
    return ( 
        <div className="collections-overview">
              {collections.map(({ id, ...ortherCollectionProps }) => (
          <CollectionPreview key={id} {...ortherCollectionProps} />
        ))}
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    collections: Collectionselector
  });
 
export default connect(mapStateToProps)(CollectionsOverview);