import React from 'react';

import SummaryItem from 'components/summaryItem';
import styles from './summary.module.scss';

const Summary = ({ data = [] }) => {
  if(!data.length) return (
    <div className={styles.emptyState}>Nothing selected</div>
  )
  return (
    <div className={styles.summaryWrapper}>
      {data.map((text, id) => <SummaryItem key={id} text={text} />)}
    </div>
  );
} 

export default Summary;
