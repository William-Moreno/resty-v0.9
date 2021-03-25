import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if(this.props.data) {
    return (
      <div className="App-results">
        <h3 className="results-title">Results Window</h3>
          <h4 className="response-headers">Count</h4>
          <JSONPretty id="json-pretty1" className="json-pretty" data={this.props.data.count}></JSONPretty>
          <h4 className="response-headers">Response Headers</h4>
          <JSONPretty id="json-pretty1" className="json-pretty" data={this.props.data.resultsHeader}></JSONPretty>
          <h4 className="response-body">Results</h4>
          <JSONPretty id="json-pretty2" className="json-pretty" data={this.props.data.resultsBody}></JSONPretty>
      </div>
    );
  } else {
    return (<p>No Data to Display</p>);
  }
  }
}







export default Results;