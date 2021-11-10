import { TodoState } from '../../types/types';

import { ADD_TODO } from './actionsType';

let nextId = 0;

const addTodo = (title: string, description: string, status: string): TodoState => ({
  type: ADD_TODO,
  title,
  description,
  status,
  nextId: nextId++,
});

export default addTodo;
