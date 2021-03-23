import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      apiMethod: [],
      apiUrl: [],
      methodClass: [],
    }
  }

  addUrlAndMethod = () => {
    this.setState({
      apiUrl: [this.state.input, ...this.state.apiUrl],
      apiMethod: [this.state.methodValue, ...this.state.apiMethod],
      methodClass: [this.state.classValue, ...this.state.methodClass],
    });


  }

  // chooseMethod = () => {
  //   this.setState({
  //     apiMethod: 
  //   })
  // }

  handleMethodChange = (e) => {
    console.log(e.target.value);
    this.setState({ methodValue: e.target.value });
  }

  methodChange = (e) => {
    console.log(e.target.value);
    this.setState({ methodValue: e.target.value });
    this.setState({ classValue: `${e.target.value}Button` });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }



  render() {
    return (
      <div>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <label>Enter URL
            <input onChange={this.handleChange} type='text' value ={this.state.input} />
          </label>
          <br/>
          <label>Choice of Method:
              <button value="get" onClick={this.methodChange}>GET</button>
              <button value="post" onClick={this.methodChange}>POST</button>
              <button value="put" onClick={this.methodChange}>PUT</button>
              <button value="delete" onClick={this.methodChange}>DELETE</button>
          </label>
          <br/>
          <input type="submit" value="Go" onClick={this.addUrlAndMethod} />
        </form>
        <div className="history-frame">
          {this.state.apiUrl.map((url, idx) => <li><button className={this.state.methodClass[idx]}>{this.state.apiMethod[idx]}</button> {url}</li>)}
        </div>
      </div>
    )
  }
}


export default Form;