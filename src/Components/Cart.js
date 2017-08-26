import React from 'react';
import '../css/style.css';
import SearchResult from './SearchResult.js';



class Cart extends React.Component {
	constructor() {
		super();
		this.renderCart = this.renderCart.bind(this);
	}

	renderCart(item) {

		return (
			<li key={item.id}>
				<p><strong>Item:</strong> {item.title}</p>
				<p><strong>Unit Price: </strong>{item.price}</p>
				<p><strong>Quantity: </strong>{item.quantity}</p>
			</li>
		);
	}


	render() {
		// const cartID = Object.keys(this.props.cartList);
		// const total = cartID.reduce((prevTotal, key) => {
		//   const items = this.props.itemList[key];
		//   const count = this.props.cart[key];
		//   const isAvailable = items && items.status==='available';
		//   if(isAvailable){
		//     return prevTotal + (count * items.price || 0)
		//   }
		//   return prevTotal;
		// }, 0);

    //<button onClick={() => this.props.cart.items.clearCart()}>Clear cart</button>

		const {cart: {items, total}} = this.props;
    if(this.props.cart.total == 0)
    return (
      <div>
				<h2>Cart</h2>

    				<h3>You have no item in your cart</h3>


        </div>
		);

		return (

			<div className="order-wrap">
				<h2>Cart</h2>
				<ul className="order">
					{items.map(this.renderCart)}
				</ul>

				<hr/>
        <li className="total">
          <strong>Total:{total}</strong>

        </li>
			</div>
		);
	}
}

export default Cart;
