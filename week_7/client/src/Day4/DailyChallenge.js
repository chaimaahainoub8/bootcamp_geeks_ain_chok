import React, { Component } from 'react';

class DailyChallenge extends Component {
  state = { message: '', responseToPost: '' };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:5000/api/hello');
      const text = await res.text();
      this.setState({ message: text });
    } catch (err) { console.log(err); }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: this.state.post }),
      });
      const text = await response.text();
      this.setState({ responseToPost: text });
    } catch (err) { console.log(err); }
  };

  render() {
    return (
      <div className="container mt-3">
        <h2 className="text-success">Day 4: Daily Challenge</h2>
        <div className="card p-4">
          <h4>Server Message: {this.state.message}</h4>
          <form onSubmit={this.handleSubmit} className="my-3">
            <input type="text" onChange={e => this.setState({ post: e.target.value })} placeholder="Type something..." className="form-control mb-2" />
            <button type="submit" className="btn btn-success">Submit to Server</button>
          </form>
          <p><strong>Response:</strong> {this.state.responseToPost}</p>
        </div>
      </div>
    );
  }
}
export default DailyChallenge;