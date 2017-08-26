import React from 'react';
import '../css/style.css';
import Cart from './Cart.js';

class SearchResult extends React.Component {


	// render a single product
	render() {
		const { product } = this.props;
    return (

			<li className="item">


				<img className="menu-fish"
				     src={product._source.images}
				     alt={product._source.title}/>
             ${product._source.price}
             <button onClick={() => this.props.addToCart(product)}> + Cart
             </button>

			</li>
		);
	}
}

export default SearchResult;
