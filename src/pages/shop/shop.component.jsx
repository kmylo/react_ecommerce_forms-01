import React, { Component } from "react";
import CollectionPreview from "../../components/Collection-preview/Collection-preview";

import { SHOP_DATA } from "./shop.data";

import "./shop.scss";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    // console.log(collections);
    return (
      // <div> SHOP PAGE </div>
      <div className="shop">
        <h1>Shop</h1>
        {collections.map((collection, idx) => (
          <CollectionPreview {...collection} key={idx} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
