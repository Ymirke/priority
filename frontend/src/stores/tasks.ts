import { writable } from 'svelte/store';

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

let TaskStore = writable(data);

export default TaskStore;