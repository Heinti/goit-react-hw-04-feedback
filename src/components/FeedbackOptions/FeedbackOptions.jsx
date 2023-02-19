import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
    <div>
      {options.map(option => {
       return <button className={css.button} key={option} type="button" onClick={()=> onLeaveFeedback(option)}>{option}</button>;
      })}
    </div>
  );
};

FeedbackOptions.propTypes ={
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}