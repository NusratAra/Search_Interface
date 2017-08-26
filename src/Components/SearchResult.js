import React from 'react';
import Cart from './Cart.js';

class SearchResult extends React.Component {


	// render a single product
	render() {
		const { product } = this.props;
		return (
			<li >
				<h5 >{product._source.title}</h5>
				<p>${product._source.price}</p>
				<img className="menu-fish"
				     src={product._source.images}
				     alt={product._source.title}/>
				<button onClick={() => this.props.addToCart(product)}> + Cart
				</button>
			</li>
		);
	}
}

export default SearchResult;
