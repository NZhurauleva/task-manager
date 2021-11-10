import React, {
  FunctionComponent, useState, useCallback, useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Input, Button } from '@material-ui/core';

import {
  TASKS, ADDNEWTASK, TEXTNOTASKS, ADDTASK,
} from '../../constants';

import addTodo from '../../store/actions/actions';

import list from '../../images/list.png';

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
      <div className={styles.containerTasks}>
        <div className={styles.titleTasks}>
          <img src={list} alt="list" />
          <span>{TASKS}</span>
        </div>
        {/* {tasks.length > 0 ? (
          <div className={styles.tasks} />
        )
          : <div className={styles.caption}><span>{TEXTNOTASKS}</span></div>} */}
      </div>
    </div>
  );
};
