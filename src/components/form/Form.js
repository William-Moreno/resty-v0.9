import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      apiMethod: [],
      apiUrl: [],
    }
  }

  addUrlAndMethod = () => {
    this.setState({
      apiUrl: [...this.state.apiUrl, this.state.input],
      apiMethod: [...this.state.apiMethod, this.state.methodValue],
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
          <label>Enter URL</label>
          <input onChange={this.handleChange} type='text' value ={this.state.input} />
          <label>Choice of Method:

              <button value="GET" onClick={this.methodChange}>GET</button>
              <button value="POST" onClick={this.methodChange}>POST</button>
              <button value="PUT" onClick={this.methodChange}>PUT</button>
              <button value="DELETE" onClick={this.methodChange}>DELETE</button>

          </label>
          <input type="submit" value="submit" onClick={this.addUrlAndMethod} />
        </form>
        <div>
          {this.state.apiUrl.map((url, idx) => <li>{this.state.apiMethod[idx]} {url}</li>)}
          {/* <li>{this.state.apiMethod} {this.state.apiUrl}</li> */}
        </div>
      </div>
    )
  }
}


export default Form;