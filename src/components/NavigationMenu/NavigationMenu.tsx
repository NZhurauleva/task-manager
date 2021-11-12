import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { RootState } from '../../types/types';

import logo from '../../images/logo.png';

import styles from './style.module.scss';

export const NavigationMenu: FunctionComponent = (): JSX.Element => {
  const amountTodo = useSelector((state: RootState) => state?.todosReducers?.length);

  return (
    <div className={styles.container}>
      <div className={styles.navMenu}>
        <NavLink to="/" className={styles.navLink}>
          <img src={logo} alt="logo" />
          <span className={styles.logo}>Task Managment</span>
        </NavLink>
        <NavLink to="/todos" className={styles.navLink}>
          <span className={styles.logo}>{`ToDo's (${amountTodo})`}</span>
        </NavLink>
      </div>
    </div>
  );
};
