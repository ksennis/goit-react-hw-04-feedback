import propTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={styles.feedbackOptions}>
            {options.map(option => (
                <button
                    type="button"
                    key={option.name}
                    name={option.id}
                    onClick={onLeaveFeedback}
                >
                    {option.name}
                </button>
             ))}
        </div>)
}

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired  
        })
    ),
    onLeaveFeedback: propTypes.func.isRequired
}    