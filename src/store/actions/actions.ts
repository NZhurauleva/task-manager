import { TodoState, TodoToggle } from '../../types/types';

import { ADD_TODO, EDIT_TODO } from './actionsType';

export const addTodo = (title: string, description: string, status: string): TodoState => ({
  type: ADD_TODO,
  title,
  description,
  status,
  id: Date.now(),
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
