import React from 'react';
import Cart from './Components/Cart.js';
import Search from './Components/Search.js';
import Data from './Components/Data.js';

class App extends React.Component {




  render() {
    return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Search />
          </div>
          <Cart /  >
        </div>
    )
  }
}

export default App;
