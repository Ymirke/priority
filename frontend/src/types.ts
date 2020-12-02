export type taskType = {
  text: string;
  id: number;
}

export type columnType = {
  id: number;
  name: string;
  tasks: taskType[];
}

export type dashboardStateType = columnType[];
