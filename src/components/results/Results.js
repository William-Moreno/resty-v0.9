import React from 'react';
import './results.scss';
import { If, Else } from '../if/If.js';
import JSONPretty from 'react-json-pretty';


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let recallInfo;
    if(this.props.data.isRecall) {
    recallInfo = this.props.data.callHistory[this.props.data.recallIndex];
    console.log(recallInfo);
    if(this.props.data.resultsBody || recallInfo) {
      }
    return (
      <div className="App-results">
        <h3 className="results-title">Results Window</h3>
        <If condition={this.props.data.isRecall}>
          <h4 className="response-headers">Count</h4>
          <JSONPretty id="json-pretty1" className="json-pretty" data={recallInfo.body.count}></JSONPretty>
          <h4 className="response-headers">Response Headers</h4>
          <JSONPretty id="json-pretty1" className="json-pretty" data={recallInfo.headers}></JSONPretty>
          <h4 className="response-body">Results</h4>
          <JSONPretty id="json-pretty2" className="json-pretty" data={recallInfo.body.results}></JSONPretty>
        </If>
        <Else condition={this.props.data.isRecall}>
          <h4 className="response-headers">Count</h4>
          <JSONPretty id="json-pretty1" className="json-pretty" data={this.props.data.count}></JSONPretty>
          <h4 className="response-headers">Response Headers</h4>
          <JSONPretty id="json-pretty1" className="json-pretty" data={this.props.data.resultsHeader}></JSONPretty>
          <h4 className="response-body">Results</h4>
          <JSONPretty id="json-pretty2" className="json-pretty" data={this.props.data.resultsBody}></JSONPretty>
        </Else>
      </div>
    );
  } else {
    return (
    <div className="App-results">
    <h3>No Data to Display</h3>
    </div>
    )
  }
  }
}







export default Results;