import { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //функция на кнопку
  handleFeedback = e => {
    const vote = e.target.name;
    console.log(vote);
    this.setState(prevState => ({ [vote]: prevState[vote] + 1 }));
  };
  // const name = event.target.name;
  // console.log(Object.keys(this.state.name));
  // this.setState(prevState => {
  //   return {
  //     [name]: prevState[name] + 1,
  //   };
  // });

  //функция на общую сумму
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    // console.log(Object.values(this.state));
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  // %
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positivePercent = Math.round(
      (good / this.countTotalFeedback()) * 100
    );
    return positivePercent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    return (
      <>
        <section>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleFeedback} name="good">
            Good
          </button>
          <button type="button" onClick={this.handleFeedback} name="neutral">
            neutral
          </button>
          <button type="button" onClick={this.handleFeedback} name="bad">
            bad
          </button>

          <section>
            <h2>Statistics</h2>

            <span>Good:{good}</span>
            <span>Neutral:{neutral}</span>
            <span>Bad:{bad}</span>
          </section>
          <section>
            <p>Total:{total}</p>
            <p>Positive feedback:{percent}%</p>
          </section>
        </section>
      </>
    );
  }
}
