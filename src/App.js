import React from 'react';
import ls from 'local-storage';
import './App.scss';

import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import Footer from './components/footer/Footer.js';
import Results from './components/results/Results.js';
import History from './components/history/History.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
       count: 0,
       resultsHeader: '',
       resultsBody: '',
       restType: '',
       apiUrl: '',
       apiCall: {},
       callHistory: [],
    }
  }

  updateResults = (data, headerData) => {
    this.setState({
      count: data.count,
      resultsHeader: headerData,
      resultsBody: data.results,
    });
  }

  updateApiCall = async (rest, url, data) => {
    this.setState({
      restType: rest,
      apiUrl: url,
      apiCall: {
        rest: rest,
        url: url,
        body: data,
      }
    });

  }

  updateCallHistory = (call) => {
    if(!this.state.callHistory.includes(call)) {
      let addToCallHistory = [call, ...this.state.callHistory];
      this.setState({
        callHistory: addToCallHistory,
        apiCall: {},
      });
      ls.set('callHistory', addToCallHistory);
    }
  }

  emptyStorage = () => {
    ls.clear();
    this.setState({
      callHistory: [],
    });
  }

  componentDidMount() {
    this.setState({
      callHistory: ls.get('callHistory') || [],
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-main">
          <div className="form-area">
          <Form updateResults={this.updateResults} updateApiCall={this.updateApiCall} data={this.state} />
          </div>
          <div className="history-results">
          <History data={this.state} updateCallHistory={this.updateCallHistory} emptyStorage={this.emptyStorage} />
          <Results data={this.state} />
          </div>
        </main>
        <Footer />
    </div>
    )
  }
}


export default App;
