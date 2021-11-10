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
