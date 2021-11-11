import { TodoState, TodoToggle } from '../../types/types';

import { ADD_TODO, EDIT_TODO } from './actionsType';

let nextId = 0;

export const addTodo = (title: string, description: string, status: string): TodoState => ({
  type: ADD_TODO,
  title,
  description,
  status,
  id: nextId++,
  edited: false,
});

export const editTodo = (title: string, description: string, status: string): TodoState => ({
  type: EDIT_TODO,
  title,
  description,
  status,
  edited: false,
});

export const toggleTodo = (id: number): TodoToggle => ({
  type: 'TOGGLE_TODO',
  id,
});
