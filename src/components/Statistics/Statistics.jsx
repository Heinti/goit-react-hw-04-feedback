import PropTypes from 'prop-types';
import css from "./Statistics.module.css"

// global styles uesd

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
    return(
            <ul>
            <li className={css.li} key={"good"}>Good: {good}</li>
            <li className={css.li} key={"neutral"}>Neutral: {neutral}</li>
            <li className={css.li} key={"bad"}>Bad: {bad}</li>
            <li className={css.li} key={"total"}>Total: {total}</li>
            <li className={css.li} key={"positivePercentage"}>Positive feedback: {positivePercentage}%</li>
            </ul>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    
}
