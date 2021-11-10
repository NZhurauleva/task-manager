import React, { FunctionComponent, useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import logo from '../../images/logo.png';

import styles from './style.module.scss';

export const NavigationMenu: FunctionComponent = (): JSX.Element => {
  const [currentPath, setCurrentPath] = useState<string>('');

  const location = useLocation();

  useEffect(() => {
    setCurrentPath(() => location.pathname);
  }, [location]);

  return (
    <div className={styles.container}>
      <div className={styles.navMenu}>
        <NavLink to="/" className={styles.navLink}>
          <img src={logo} alt="logo" />
          <span className={styles.logo}>Task Managment</span>
        </NavLink>
        <div className={styles.navPath}>
          <span className={styles.titlePath}>
            {currentPath === '/' ? 'Home' : 'Edit'}
          </span>
        </div>
      </div>
    </div>
  );
};
