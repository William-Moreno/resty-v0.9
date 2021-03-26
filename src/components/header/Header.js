import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      heading: 'Home',
    }
  }

  render() {
  return (
    <div className="App-header">
      <h1>RESTy</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/help">Help</Link>
        </nav>
    </div>
  )
  }
}

export default Header;