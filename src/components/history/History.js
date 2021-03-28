import React from 'react';
import './history.scss';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localHistory: [],
    }
  }

  render() {
        console.log(this.props.history);
    return (
      <div className="history-frame">
        <h3>History Header</h3>
        {this.props.history.map((request, idx) => <li key={idx} ><button className="method-button">{request.method}</button> {request.url}</li>)}
      </div>
    );
  }
}

export default History;