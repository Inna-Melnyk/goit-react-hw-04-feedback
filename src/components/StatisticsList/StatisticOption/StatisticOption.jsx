import PropTypes from 'prop-types';
import { Text } from './StatisticOption.styled';

export const StatisticOption = ({ item, value }) => {
  return (
    <li key={item}>
      <Text>
        {item}: {value}
      </Text>
    </li>
  );
};

StatisticOption.propTypes = {
  item: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
