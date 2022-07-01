import React, {Component} from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import {Notification} from './Notification/Notification'

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round(good / this.countTotalFeedback()*100);
  }

  counterOfFeedback = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));

  };
  
  render() {
    return (
      <>
      <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys(this.state)}
            onBtnClick={ this.counterOfFeedback} />
        </Section>
        <Section
        title={'Statistics'}
      >
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) : <Notification message='There is no feedback'/>
        }
      </Section>
      </>
  );
 }
};
