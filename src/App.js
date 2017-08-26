import React from 'react';
import Cart from './Components/Cart.js';
import Search from './Components/Search.js';
import Data from './Components/Data.js';
import SearchResult from './Components/SearchResult.js';

class App extends React.Component {
	constructor() {
		super();
		this.addToCart = this.addToCart.bind(this);
		this.onSearchFinished = this.onSearchFinished.bind(this);
		// getinitialState
		this.state = {
			cart: {
				items: [],
				total: 0
			},
			products: [],
		};
	}



	addToCart(item) {

		//
		// const itemList = {...this.state.itemList};
		// const cartList = {...this.state.cartList};
		// cartList[key] = cartList[key] + 1 || 1;
		// itemList[key] = item;
		// this.setState({cartList,itemList});
		// this.setState({itemList});
		// this.props.addToCart(item);
		const {cart} = this.state;
		let newCart = {...cart};
		const existingItemIndex = newCart.items.map(cartItem => cartItem.id).
			indexOf(item._id);
		if (existingItemIndex > -1) {
			// already exists in cart, update quantity
			const cartItem = newCart.items[existingItemIndex];
			cartItem.quantity = ( cartItem.quantity || 0) + 1;
			newCart.items[existingItemIndex] = cartItem;
		}
		else {
			const cartItem = {
				id: item._id,
				title: item._source.title,
				quantity: 1,
				price: item._source.price,
			};
			newCart.items.push(cartItem);
		}
		console.log(cart.items.map(item => item.quantity * item.price));
		newCart.total = cart.items.map(item =>
		item.quantity * item.price).reduce((prevTotal, price) => prevTotal + price);
		console.log(newCart);
		this.setState({cart : newCart});
	}


	onSearchFinished(products) {
		console.log(products);
		this.setState({
			products,
		});
	}

	render() {
		const {products, cart} = this.state;
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Search
						onSearchFinished={this.onSearchFinished}/>

				<ul>
				{ products.map(product => (
					<SearchResult product={product} addToCart={this.addToCart}/>
				))}
				</ul>
</div>
				<Cart cart={cart}/>
			</div>
		);
	}
}

export default App;
