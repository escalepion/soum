import React from 'react';
import styles from './checkBoxWrapper.module.scss';

const CheckBoxWrapper = (props) => {
  const { children, checked, onChange, title, desc, onOpenChildren } = props;
  return (
    <div className={styles.checkBoxWrapper}>
      <div className={styles.checkWrapper}>
        <div className={styles.thickWrapper}>
          <input type="checkbox" checked={checked} onChange={onChange} />
        </div>
        <div className={styles.titleWrapper} onClick={onOpenChildren}>
          <div><span>{title}</span></div>
          <div><span>{desc}</span></div>
        </div>
      </div>
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
}

export default CheckBoxWrapper;
