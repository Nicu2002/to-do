

import styles from './AboutDay.module.css';

const AboutDay = ({taskNumber, taskDone}) => {
    return (
        <div className={styles.aboutDay}>
            <p className={styles.aboutStatistic}><span>{taskDone}</span>/{taskNumber}</p>
            <p className={styles.aboutComment}>tasks done</p>
        </div>
    );
};

export default AboutDay;