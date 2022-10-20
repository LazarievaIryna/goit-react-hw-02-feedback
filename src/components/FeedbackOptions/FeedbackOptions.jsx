import PropTypes from 'prop-types';
import {
  ListButton,
  Button,
  ListItem,
} from '../FeedbackOptions/FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListButton>
      {options.map(option => (
        <ListItem key={option}>
          <Button type="button" onClick={onLeaveFeedback} name={option}>
            {option}
          </Button>
        </ListItem>
      ))}
    </ListButton>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
