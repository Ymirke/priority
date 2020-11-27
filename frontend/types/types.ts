export type taskType = {
  text: string;
  id: number;
}

export type dashboardStateType = {
  later: taskType[],
  thisWeek: taskType[],
  today: taskType[],
  done: taskType[],
}
