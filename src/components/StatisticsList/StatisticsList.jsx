import PropTypes from 'prop-types';
import { StatisticOption } from './StatisticOption/StatisticOption';
import { List, Text } from './StatisticsList.styled';

export const StatisticsList = ({
  options,
  totalFeedback,
  PositivePercentage,
}) => {
  return (
    <List>
      {Object.keys(options).map(item => {
        return <StatisticOption item={item} key={item} value={options[item]} />;
      })}
      <li>
        <Text>
          Total: <span>{totalFeedback(options)}</span>
        </Text>
      </li>
      <li>
        <Text>
          Positive Feedback:{' '}
          <span> {options.good ? PositivePercentage(options) : 0}</span>%
        </Text>
      </li>
    </List>
  );
};

StatisticsList.propTypes = {
  options: PropTypes.shape({}).isRequired,
  totalFeedback: PropTypes.func.isRequired,
  PositivePercentage: PropTypes.func.isRequired,
};