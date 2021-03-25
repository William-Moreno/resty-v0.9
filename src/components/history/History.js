import React from 'react';
import ls from 'local-storage';
import './history.scss';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="history-component">
        <h3>History Header</h3>
      </div>
    );
  }
}

export default History;