import React from 'react';
import SearchResult from './SearchResult.js';

class Cart extends React.Component {
  constructor(){
    super();
    this.renderCart = this.renderCart.bind(this);
  }

  renderCart(key){
    const items = this.props.itemList[key];
    const count = this.props.cartList[key];

    return(
      <li key={key}>
        <p>{count} {items._source.title}</p>
        <p>{count} ${ count * items._source.price}</p>
      </li>
    )
  }



  render() {
    const cartID = Object.keys(this.props.cartList);
    const total = cartID.reduce((prevTotal, key) => {
      const items = this.props.itemList[key];
      const count = this.props.cart[key];
      const isAvailable = items && items.status==='available';
      if(isAvailable){
        return prevTotal + (count * items.price || 0)
      }
      return prevTotal;
    }, 0);




    return (
      <div>
        <p>Cart</p>
        <p>{cartID.map(this.renderCart)}</p>
        {total}
        </div>
    );
  }
}

export default Cart;
