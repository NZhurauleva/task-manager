import rootReducers from '../store/reducers/index';

export interface TodoState {
    type: string;
    title: string;
    description: string;
    nextId: number;
    status: string;
  }

export interface TodoModel {
    title: string;
    description: string;
    id: number;
    status: string;
  }

export type RootState = ReturnType<typeof rootReducers>
