import PropTypes from 'prop-types';
import { Button } from './FeedbackBtn.styled';
export const FeedbackBtn = ({ item, onLeaveFeedback }) => {
  return (
  
      <Button onClick={() => onLeaveFeedback(item)}>{item}</Button>
    
  );
};

FeedbackBtn.propTypes = {
  item: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
