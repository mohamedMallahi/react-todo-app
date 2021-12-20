import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles['btn-primary']}>
      {children}
    </button>
  );
};

export default Button;
