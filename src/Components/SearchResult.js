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
    cartList[key] = cartList[key] + 1 || 1;
    itemList[key] = itemList;
    this.setState({ cartList });
    this.setState({ itemList });
}


  render() {
    const productList = this.props.products.map((products, index) => (
      <li key={index}>
      <h5 >{products._source.title}</h5>
      <p>${products._source.price}</p>
      <img className="menu-fish"
      src={products._source.images} alt={products._source.title} />
        <button key={index} onClick={() => this.addCart(products, products._source.title)}> + Cart</button>
      </li>
    ));


    return (
      <div>

        <ul>
        {productList}
        </ul>
      </div>
    );
  }
}

export default SearchResult;
