import React from 'react';
import './App.scss';
import ls from 'local-storage';
import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import Footer from './components/footer/Footer.js';
import Results from './components/results/Results.js';
import History from './components/history/History.js';
import { If, IsObjectEmpty } from './components/if/If.js';
import { BrowserRouter, Route, Switch, Navlink } from 'react-router-dom';
import Home from './components/home/Home.js';
import Help from './components/help/Help.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
       history: ls.get('history') || [],
       request: {},
       isLoading: false,
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

  toggle = () => {
    this.setState({ isLoading: !this.state.isLoading });
  }


  render() {
    return (
      <div className="App" role="application">
        <Header />
        <Route exact path="/">
        <main className="App-main">
          <div className="form-area">
          <Form updateResults={this.updateResults} history={this.state.history} toggle={this.toggle} />
          </div>
          <div className="history-results">
          <History history={this.state.history} />
          <Results request={this.state.request} />
          </div>
        </main>
        </Route>
        <Route exact path="/help">
          <div>
          <Help />
          </div>
        </Route>
        <Route exact path="/history">
          <div className="history-page">
          <History history={this.state.history} />
          </div>
        </Route>
        <Footer />
    </div>
    )
  }
}


export default App;
