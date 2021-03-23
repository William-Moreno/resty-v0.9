import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      apiMethod: [],
      apiUrl: [],
      methodClass: [],
      formGet: 'plain',
      formPost: 'plain',
      formPut: 'plain',
      formDelete: 'plain',
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
    if(e.target.value === 'get') {
      this.setState({
        formGet: 'getButton',
        formPost: 'plain',
        formPut: 'plain',
        formDelete: 'plain',
      });
    } else if(e.target.value === 'post') {
      this.setState({
        formGet: 'plain',
        formPost: 'postButton',
        formPut: 'plain',
        formDelete: 'plain',
      });
    } else if(e.target.value === 'put') {
      this.setState({
        formGet: 'plain',
        formPost: 'plain',
        formPut: 'putButton',
        formDelete: 'plain',
      });
    } else if(e.target.value === 'delete') {
      this.setState({
        formGet: 'plain',
        formPost: 'plain',
        formPut: 'plain',
        formDelete: 'deleteButton',
      });
    }
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
          <label>Enter REST API URL: <br />
            <input className="urlEntry" onChange={this.handleChange} type='text' value ={this.state.input} />
          </label>
          <br/>
          <label>Choice of Method: <br />
              <button className={this.state.formGet} value="get" onClick={this.methodChange}>GET</button>
              <button className={this.state.formPost} value="post" onClick={this.methodChange}>POST</button>
              <button className={this.state.formPut} value="put" onClick={this.methodChange}>PUT</button>
              <button className={this.state.formDelete} value="delete" onClick={this.methodChange}>DELETE</button>
          <input className="plain goButton" type="submit" value="Go" onClick={this.addUrlAndMethod} />
          </label>
        </form>
        <div className="history-frame">
          <h3 className="history-title">Recent Routes</h3>
          {this.state.apiUrl.map((url, idx) => <li><button className={this.state.methodClass[idx]}>{this.state.apiMethod[idx]}</button> {url}</li>)}
        </div>
      </div>
    )
  }
}


export default Form;