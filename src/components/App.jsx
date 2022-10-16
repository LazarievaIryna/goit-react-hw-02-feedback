import { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <>
        <section>
          <h2>Please leave feedback</h2>
          <button type="button">Good</button>
          <button type="button">neutral</button>
          <button type="button">bad</button>

          <section>
            <h2>Statistics</h2>
            <span>Good:</span>
            <span>Neutral:</span>
            <span>Bad:</span>
          </section>
        </section>
      </>
    );
  }
}
