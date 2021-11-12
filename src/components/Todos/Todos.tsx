import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { TodoItemMemo } from '../TodoItem/TodoItem';

import { TodoModel, RootState } from '../../types/types';

import { TASKS, TEXTNOTASKS } from '../../constants';

import list from '../../images/list.png';

import styles from './style.module.scss';

export const Todos: FunctionComponent = (): JSX.Element => {
  const tasks = useSelector((state: RootState) => state?.todosReducers);

  return (
    <div className={styles.container}>
      <div className={styles.containerTasks}>
        <div className={styles.titleTasks}>
          <img src={list} alt="list" />
          <span>{TASKS}</span>
        </div>
        {tasks.length > 0 ? (
          <div className={styles.tasks}>
            {tasks.map((task: TodoModel) => (
              <TodoItemMemo
                task={task}
                key={task.id}
              />
            ))}
          </div>
        )
          : <div className={styles.caption}><span>{TEXTNOTASKS}</span></div>}
      </div>
    </div>
  );
};
