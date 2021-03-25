import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      restType: 'GET',
    }
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleTypeChange = (e) => {
    e.preventDefault();
    this.setState({
      restType: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const request = await fetch(this.state.input, {
      method: this.state.restType,
    });
    const data = await request.json();
    console.log(data);
    const headers = request.headers;
    console.log(headers);
    this.props.updateResults(data, headers);
  }

  render() {
    return (
      <div className="App-form">
        <form className="app-url" onSubmit={this.handleSubmit}>
          <label>Enter URL</label>
          <input data-testid="form-input" onChange={this.handleInputChange} type="text" value={this.state.input} />
          <button>Go!</button>
        </form>
        <form className="rest-select">
          <button onClick={this.handleTypeChange} value="GET">GET</button>
          <button onClick={this.handleTypeChange} value="POST">POST</button>
          <button onClick={this.handleTypeChange} value="PUT">PUT</button>
          <button onClick={this.handleTypeChange} value="DELETE">DELETE</button>
        </form>
      </div>
    )
  }
};

export default Form;