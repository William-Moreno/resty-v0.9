import React from 'react';
import './results.scss';
import { If, Else } from '../if/If.js';
import JSONPretty from 'react-json-pretty';
import Loader from "react-loader-spinner";
import { If, Else } from '../if/If.js';


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if(this.props.request.body) {
      console.log(this.props.request);
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
          <JSONPretty id="json-pretty1" className="json-pretty" data={this.props.request.body.count}></JSONPretty>
          {/* <h4 className="response-headers">Response Headers</h4>
          <JSONPretty id="json-pretty1" className="json-pretty" data={this.props.request.body.header}></JSONPretty> */}
          <h4 className="response-body">Results</h4>
          <JSONPretty id="json-pretty2" className="json-pretty" data={this.props.request.body.results}></JSONPretty>
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