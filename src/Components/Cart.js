import React from 'react';
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

		const {cart: {items, total}} = this.props;

		return (
			<div className="cart">
				<p>Cart</p>
				<ul>
					{items.map(this.renderCart)}
				</ul>

				<hr/>
				<p><strong>Total: {total}</strong></p>
			</div>
		);
	}
}

export default Cart;
