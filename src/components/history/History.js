import React from 'react';
import './history.scss';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

componentDidUpdate() {
  if(this.props.data.apiCall.rest) {
    this.props.updateCallHistory(this.props.data.apiCall);
  }
}

clearHistory = (e) => {
  e.preventDefault();

  this.props.emptyStorage();
}

recall = (e) => {
  let callIndex = e.target.value;
  this.props.repopulate(callIndex);
}


  render() {
        console.log(this.props.data.callHistory);
    return (
      <div className="history-frame">
        <h3>History Header</h3>
        <button onClick={this.clearHistory}>Clear History</button>
        {this.props.data.callHistory.map((call, idx) => <li key={idx} onClick={this.recall} value={idx} ><button className="method-button">{call.rest}</button> {call.url}</li>)}
      </div>
    );
  }
}

export default History;