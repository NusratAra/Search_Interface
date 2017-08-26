import React from 'react';
import Cart from './Components/Cart.js';
import Search from './Components/Search.js';
import Data from './Components/Data.js';
import SearchResult from './Components/SearchResult.js';

class App extends React.Component {
  constructor() {
    super();

    this.addToOrder = this.addToOrder.bind(this);

    // getinitialState
    this.state = {
      order: {}
    };
  }

  addToOrder(key) {
  // take a copy of our state
  const order = {...this.state.order};
  // update or add the new number of fish ordered
  order[key] = order[key] + 1 || 1;
  // update our state
  this.setState({ order });
}




  render() {
    return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Search />
          </div>


          <ul>
            {
              Object
                .keys(this.state.order)
                .map(key => <SearchResult key={key} index={key}  addCart={this.addToOrder}/>)
            }
          </ul>






          <Cart order={this.state.order}/>
        </div>
    )
  }
}

export default App;
