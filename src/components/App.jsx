import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackList } from "./FeedbackList/FeedbackList";
import { StatisticsList } from "./StatisticsList/StatisticsList";
import { Text, NoFeedbackSection } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = (name) => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1
     }
   }) 
  }

  countTotalFeedback = (options) => {return Object.values(options).reduce((acc, item) => acc + item, 0) }
  
  countPositiveFeedbackPercentage = (options) => { return Math.round((options.good / this.countTotalFeedback(options)) * 100);}

  render() {
    return (
      <main>
        <Section title='Leave your feedback'>
          <FeedbackList
            options={this.state}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>

        {this.state.good !== 0 ||
        this.state.neutral !== 0 ||
        this.state.bad !== 0 ? (
          <Section title='Statistics'>
            <StatisticsList
              options={this.state}
              totalFeedback={this.countTotalFeedback}
              PositivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <NoFeedbackSection>
            <Text >There is no feedback!</Text >
          </NoFeedbackSection>
        )}
      </main>
    );
  }
};
 

    
