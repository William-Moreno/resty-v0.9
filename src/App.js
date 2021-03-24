import React from 'react';
import './App.scss';

import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import Footer from './components/footer/Footer.js';
import Results from './components/results/Results.js';

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
      resultHeader: headerData,
      resultsBody: data,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-main">
          <Form updateResults={this.updateResults} />
          <Results data={this.state.resultsBody} headerData={this.state.resultHeader} />
        </main>
        <Footer />
    </div>
    )
  }
}


export default App;
