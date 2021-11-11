import React, {
  FunctionComponent, memo, useCallback,
} from 'react';

import { Button } from '@material-ui/core';

import { Zoom } from 'react-awesome-reveal';

import { TodoModel } from '../../types/types';

import edit from '../../images/edit.png';

import styles from './style.module.scss';

interface DataProps {
task: TodoModel,
}

const TodoItem: FunctionComponent<DataProps> = ({ task }:DataProps): JSX.Element => {
  const {
    title, description, status, id,
  } = task;

  return (
    <Zoom>
      <div className={styles.container}>
        <span className={styles.title}>{title.length > 20 ? `${title.slice(0, 19)}...` : title}</span>
        <span className={styles.description}>{description}</span>
        <div className={styles.containerBtn}>
          <div className={styles.status}>{status}</div>
          <Button variant="outlined" className={styles.btn}><img src={edit} alt="edit" /></Button>
        </div>
      </div>
    </Zoom>

  );
};

export const TodoItemMemo = memo(TodoItem);
