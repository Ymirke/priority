import { writable } from 'svelte/store';

import type { columnsDataType } from '../types';

let data: columnsDataType = {
  later: {
    name: 'Later',
    columnName: 'later',
    tasks: [
      { 
        id: 1, 
        text: 'ullam nobis libero sapiente ad optio',
      },
      { 
        id: 2, 
        text: 'delectus aut autem', 
      },
      { 
        id: 3,
        text: 'quis ut nam facilis et officia qui',
      },
      {
        id: 4,
        text: 'fugiat veniam minus',
      },
      {
        id: 5,
        text: 'et porro tempora',
      },
  ]},
  thisWeek: {
    name: 'This week',
    columnName: 'thisWeek',
    tasks: [
      {
        id: 6,
        text: 'laboriosam mollitia et enim',
      },
      {
        id: 7,
        text: 'qui ullam ratione quibusdam',
      },
      { 
        id: 8,
        text: 'illo expedita consequatur quia in',
      },
      { 
        id: 9,
        text: 'quo adipisci enim quam ut ab',
      },
      { 
        id: 10,
        text: 'molestiae perspiciatis ipsa',
      },
  ]},
  today: {
    name: 'Today',
    columnName: 'today',
    tasks: [
    {
      id: 11,
      text: 'illo est ratione doloremque quia maiores aut',
    },
    {
      id: 12,
      text: 'vero rerum temporibus dolor',
    },
    {
      id: 13,
      text: 'ipsa repellendus fugit nisi',
    },
    {
      id: 14, 
      text: 'et doloremque nulla',
    },
    { 
      id: 15, 
      text: 'repellendus sunt dolores architecto voluptatum',
    },
  ]},
  done: {
    name: 'Done',
    columnName: 'done',
    tasks: [
      {
        id: 16,
        text: 'ab voluptatum amet voluptas',
      },
      {
        id: 17,
        text: 'accusamus eos facilis sint et aut voluptatem',
      },
      { 
        id: 18,
        text: 'quo laboriosam deleniti aut qui',
      },
      { 
        id: 19, 
        text: 'dolorum est consequatur ea mollitia in culpa',
      },
      {
        id: 20,
        text: 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
      },
    ]},
}

let TaskStore = writable(data);

export default TaskStore;