import { TodoState, TodoModel } from '../../types/types';

import { ADD_TODO } from '../actions/actionsType';

const initialState: TodoModel[] = [];

const todosReducers = (state = initialState, action: TodoState): TodoModel[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          title: action.title,
          description: action.description,
          id: action.nextId,
          status: action.status,
        },
      ];
    default:
      return state;
  }
};

export default todosReducers;
