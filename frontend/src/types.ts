export type taskType = {
  text: string;
  id: number;
}

export type columnType = {
  columnName: string;
  name: string;
  tasks: taskType[];
}

export type columnsDataType = {
  later: columnType,
  thisWeek: columnType,
  today: columnType,
  done: columnType,
}

export type pageType = 'dashboard' | 'focus' | 'plan';