import { writable } from './localStorage';

import type { columnsDataType } from '../types';

let data: columnsDataType = {
  later: {
    name: 'Later',
    columnName: 'later',
    tasks: []
  },
  thisWeek: {
    name: 'This week',
    columnName: 'thisWeek',
    tasks: []
  },
  today: {
    name: 'Today',
    columnName: 'today',
    tasks: []
  },
  done: {
    name: 'Done',
    columnName: 'done',
    tasks: []
  },
}

let TaskStore = writable('tasks', data);

export default TaskStore;