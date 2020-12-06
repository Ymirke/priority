import { writable } from './localStorage';

import type { columnsDataType } from '../types';

let data: columnsDataType = {
  later: {
    name: 'Later',
    columnName: 'later',
    tasks: [
      {
        text: 'Tip #1 - Add tasks at the top of each column',
        id: 'Intro-1'
      }
    ]
  },
  thisWeek: {
    name: 'This week',
    columnName: 'thisWeek',
    tasks: [
      {
        text: 'Tip #2 - Press to rename',
        id: 'Intro-2'
      },
      {
        text: 'Tip #3 - Drag to "today"-column, then press priority!',
        id: 'Intro-3'
      }
    ]
  },
  today: {
    name: 'Today',
    columnName: 'today',
    tasks: [
      {
        text: 'Tip #4 - Press checkbox on tasks to complete them',
        id: 'Intro-4'
      }
    ]
  },
  done: {
    name: 'Done',
    columnName: 'done',
    tasks: []
  },
}

let TaskStore = writable('tasks', data);

export default TaskStore;