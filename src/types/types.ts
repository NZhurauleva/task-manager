import rootReducers from '../store/reducers/index';

export interface TodoState {
    type: string;
    title: string;
    description: string;
    id?: number;
    status: string;
    edited: boolean;
  }
export interface TodoToggle {
    type: string;
    id: number;
  }

export interface TodoModel {
    title: string;
    description: string;
    id?: number | undefined;
    status: string;
    edited: boolean;
  }

export type RootState = ReturnType<typeof rootReducers>
