import { TodoState, TodoModel } from '../../types/types';

import { ADD_TODO, EDIT_TODO, TOGGLE_TODO } from '../actions/actionsType';

const initialState: TodoModel[] = [];

const todosReducers = (state = initialState, action: TodoState): TodoModel[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          title: action.title,
          description: action.description,
          id: action.id,
          status: action.status,
          edited: false,
        },
      ];
    case EDIT_TODO:
      return state.map((todo) => (todo.edited === true
        ? {
          ...todo,
          title: action.title,
          description: action.description,
          status: action.status,
          edited: !todo.edited,
        } : todo));
    case TOGGLE_TODO:
      return state.map((todo) => (todo.id === action.id
        ? { ...todo, edited: !todo.edited } : todo));
    default:
      return state;
  }
};

export default todosReducers;
