import React from 'react';
import styles from './summaryItem.module.scss';

const SummaryItem = ({ text }) => (
  <div className={styles.summaryItem}><span>{text}</span></div>
)

export default SummaryItem;
