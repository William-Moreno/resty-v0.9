import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'GET',
      body: {},
      error: {},
      textEntry: '',
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.toggle();
    let request;
    
    if(this.state.method === 'GET') {
      request = await fetch(this.state.url, { method: this.state.method });
    } else {
      request = await fetch(this.state.url, {
        method: this.state.method,
        body: this.state.textEntry ? JSON.stringify(this.state.textEntry) : '',
      });
    }
    
    let data = await request.json();
    
    this.props.updateResults({
      url: this.state.url,
      method: this.state.method,
      body: data,
      error: false,
    });
    this.props.toggle();
  }

  render() {
    return (
      <div className="App-form">
        <form className="app-url" onSubmit={this.handleSubmit}>
          <label>Enter URL</label>
          <input data-testid="form-input" onChange={this.handleChange} type="text" name="url" value={this.state.url} />
          <button type="submit">Go!</button>
        </form>
        <form className="rest-select">
          <button onClick={this.handleChange} value="GET" name="method">GET</button>
          <button onClick={this.handleChange} value="POST" name="method">POST</button>
          <button onClick={this.handleChange} value="PUT" name="method">PUT</button>
          <button onClick={this.handleChange} value="DELETE" name="method">DELETE</button>
          <textarea onChange={this.handleChange} name="textEntry" value={this.state.textEntry}></textarea>
        </form>
      </div>
    )
  }
};

export default Form;