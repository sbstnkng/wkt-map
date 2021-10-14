import React from 'react';
import styles from './header.module.css';

export const Header: React.FC = () => {
  const { href } = window.location;

  return (
    <div className={styles.logoWrapper}>
      <a href={href} className={styles.logo}>
        <i className="fas fa-map-marked fa-2x"></i>
        <span>WKT Map</span>
      </a>
    </div>
  );
};
