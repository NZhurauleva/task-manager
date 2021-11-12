import React, { FunctionComponent, useState, useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { TextField, Input, Button } from '@material-ui/core';

import { Todos } from '../Todos/Todos';

import { ADDNEWTASK, ADDTASK } from '../../constants';

import { addTodo } from '../../store/actions/actions';

import styles from './style.module.scss';

export const CreateTodo: FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSaveTask = useCallback(() => {
    dispatch(addTodo(title, description, 'ToDo'));
    setTitle(() => '');
    setDescription(() => '');
  }, [dispatch, title, description]);

  return (
    <div className={styles.container}>
      <div className={styles.containerCard}>
        <span className={styles.heading}>{ADDNEWTASK}</span>
        <Input
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          fullWidth
          color="primary"
          className={styles.titleCard}
        />
        <TextField
          label="Description"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          fullWidth
          className={styles.descriptionCard}
          multiline
          minRows={6}
          maxRows={6}
        />
        <Button
          variant="outlined"
          disabled={title.length === 0 || description.length === 0}
          onClick={handleSaveTask}
          color="primary"
          size="medium"
        >
          {ADDTASK}
        </Button>
      </div>
      <Todos />
    </div>
  );
};
