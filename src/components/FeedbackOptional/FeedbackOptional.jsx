import styles from './FeedbackOptional.module.css'

export const FeedbackOptional = ({ options, onBtnClick }) => {
    return (<ul className={styles.feedbackList}>{options.map(option =><li className={styles.feedbackItem} key={option}><button className={styles.btnFeedback} onClick={() => onBtnClick(option)}>{option}</button></li>)}</ul>)
};