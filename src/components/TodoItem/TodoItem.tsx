import React, {
  FunctionComponent, memo, useCallback,
} from 'react';

import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';

import { Zoom } from 'react-awesome-reveal';

import { TodoModel } from '../../types/types';

import { toggleTodo, deleteTodo } from '../../store/actions/actions';

import edit from '../../images/edit.png';
import del from '../../images/delete.png';

import styles from './style.module.scss';

interface DataProps {
task: TodoModel,
}

const TodoItem: FunctionComponent<DataProps> = ({ task }:DataProps): JSX.Element => {
  const {
    title, description, status, id,
  } = task;

  const dispatch = useDispatch();

  const history = useHistory();

  const handleClickEdit = useCallback((idItem) => {
    dispatch(toggleTodo(idItem));

    history.push('/edit');
  }, [history]);

  const handleClickDelete = useCallback((idItem) => {
    dispatch(deleteTodo(idItem));
  }, [dispatch]);

  return (
    <Zoom>
      <div className={styles.container}>
        <Button variant="outlined" onClick={() => handleClickDelete(id)} className={styles.btnDelete}><img src={del} alt="delete" /></Button>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        <div className={styles.containerBtn}>
          <div className={styles.status}>{status}</div>
          <Button variant="outlined" onClick={() => handleClickEdit(id)} className={styles.btn}><img src={edit} alt="edit" /></Button>
        </div>
      </div>
    </Zoom>

  );
};

export const TodoItemMemo = memo(TodoItem);
