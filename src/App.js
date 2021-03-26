import React from 'react';
import './App.scss';
import ls from 'local-storage';
import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import Footer from './components/footer/Footer.js';
import Results from './components/results/Results.js';
import History from './components/history/History.js';
import { If, isObjectEmpty } from './components/if/If.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
       history: ls.get('history') || [],
       request: {},
    }
  }

  componentDidMount() {
    this.setState({ history: ls.get('history') });
  }

  updateResults = (request) => {

    let lookie = ls.get('history');
    let updateHistory;
    if(lookie){
      if(!lookie.includes(request)) {
      updateHistory = [request, ...lookie];
      }
    } else {
      updateHistory = [request];
    }
      this.setState({ history: updateHistory, request: request });
      ls.set('history', updateHistory);

  }


  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-main">
          <div className="form-area">
          <Form updateResults={this.updateResults} history={this.state.history} />
          </div>
          <div className="history-results">
          <History history={this.state.history} />
          <Results request={this.state.request} />
          </div>
        </main>
        <Footer />
    </div>
    )
  }
}


export default App;
