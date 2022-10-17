import { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  render() {
    // const { good } = this.state;
    return (
      <>
        <section>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleFeedback} name="good">
            Good
          </button>
          <button type="button">neutral</button>
          <button type="button">bad</button>

          <section>
            <h2>Statistics</h2>

            <span>Good:{this.state.good}</span>
            <span>Neutral:</span>
            <span>Bad:</span>
          </section>
        </section>
      </>
    );
  }
}
