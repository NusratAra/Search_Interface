import React from 'react';
import Cart from './Cart.js';

class SearchResult extends React.Component {

  constructor() {
    super();
    this.state = {
      itemList: [],
      cartList: []
    };

    this.addCart = this.addCart.bind(this);
}

addCart(item, key) {
    const itemList = {...this.state.itemList};
    const cartList = {...this.state.cartList};
    this.setState({ cartList });
    this.setState({ itemList });
}


  render() {
    const productList = this.props.products.map(product => (
      <li>
        {product._source.title}
        {product._source.description}
        {product._source.price}
        </li>
    ));


    return (
      <div>

        <ul>

        {this.props.productList}

        </ul>
      </div>
    );
  }
}

export default SearchResult;
