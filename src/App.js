import React from 'react';
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
    }
  }

  updateResults = (data, headerData) => {
    this.setState({
      count: data.count,
      resultHeader: headerData,
      resultsBody: data.results,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-main">
          <div className="form-area">
          <Form updateResults={this.updateResults} />
          </div>
          <div className="history-results">
          <History data={this.state} />
          <Results data={this.state} />
          </div>
        </main>
        <Footer />
    </div>
    )
  }
}


export default App;
