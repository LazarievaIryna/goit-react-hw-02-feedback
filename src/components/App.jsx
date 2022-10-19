import { Component } from 'react';
import { Statistics } from './Statistic/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
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
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percent}
            />
          )}
        </Section>
      </>
    );
  }
}
