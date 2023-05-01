import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import {
  ListButton,
  Button,
  ListItem,
} from '../FeedbackOptions/FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListButton>
      {options.map(option => (
        <ListItem key={nanoid()}>
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
