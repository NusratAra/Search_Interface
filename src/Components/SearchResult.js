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
    itemList[key] = item;
    this.setState({ cartList });
    this.setState({ itemList });
}


  render() {
    const productList = this.props.products.map((products, ind) => (
      <li key={ind}>
      <h5 >{products._source.title}</h5>
      <p>${products._source.price}</p>
      <img className="menu-fish"
      src={products._source.images} alt={products._source.title} />
        <button key={ind} onClick={() => this.addCart(products, products._source.title)}> + Cart</button>
      </li>
    ));


    return (
      <div>

        <ul>
        {productList}
        </ul>
        <Cart itemList={this.state.itemList} cartList={this.state.cartList} />

      </div>
    );
  }
}

export default SearchResult;
