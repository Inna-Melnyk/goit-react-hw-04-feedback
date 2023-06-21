import PropTypes from 'prop-types';

import { FeedbackBtn } from './FeedbackBtn/FeedbackBtn';
import { List } from './FeedbackList.styled';

export const FeedbackList = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {Object.keys(options).map(item => {
        return (
          <li key={item}>
            <FeedbackBtn item={item} onLeaveFeedback={onLeaveFeedback} />
          </li>
        );
      })}
    </List>
  );
};

FeedbackList.propTypes = {
  options: PropTypes.shape({}).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
