import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackList } from './FeedbackList/FeedbackList';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { Text, NoFeedbackSection } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const countFeedback = evt => {
    const { ariaLabel } = evt.currentTarget;

    switch (ariaLabel) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = good + neutral + bad;
  
  const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);

  return (
    <main>
      <Section title="Leave your feedback">
        <FeedbackList options={options} onLeaveFeedback={countFeedback} />
      </Section>

      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <Section title="Statistics">
          <StatisticsList
            options={options}
            totalFeedback={countTotalFeedback}
            PositivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <NoFeedbackSection>
          <Text>There is no feedback!</Text>
        </NoFeedbackSection>
      )}
    </main>
  );
};
