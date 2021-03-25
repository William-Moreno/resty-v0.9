import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      restType: 'GET',
      requestEntry: '',
      isLoading: false,
    }
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleRequestChange = (e) => {
    this.setState({
      requestEntry: e.target.value
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
    await this.setState({ isLoading: true });
    let request;
    let data;
    let headers;
    
    if(this.state.restType === 'GET') {
      request = await fetch(this.state.input, {
        method: this.state.restType,
      });
    } else {
      request = await fetch(this.state.input, {
        method: this.state.restType,
        body: JSON.stringify(this.state.requestEntry) || '',
      });
    }

    this.setState({ isLoading: false });
    
    data = await request.json();
    headers = request.headers;
    this.props.updateResults(data, headers);
    this.props.updateApiCall(this.state.restType, this.state.input, data);
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
          <textarea onChange={this.handleRequestChange} value={this.state.requestEntry}></textarea>
        </form>
      </div>
    )
  }
};

export default Form;