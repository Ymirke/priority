import { writable } from 'svelte/store';

import type { dashboardStateType } from '../types';

let data:dashboardStateType = [
  {
    id: 1,
    name: 'Later',
    tasks: [
      { id: 1, text: 'ullam nobis libero sapiente ad optio' },
      { id: 2, text: 'delectus aut autem' },
      { id: 3, text: 'quis ut nam facilis et officia qui' },
      { id: 4, text: 'fugiat veniam minus' },
      { id: 5, text: 'et porro tempora' },
    ],
  },
  {
    id: 2,
    name: 'This week',
    tasks: [
      { id: 6, text: 'laboriosam mollitia et enim' },
      { id: 7, text: 'qui ullam ratione quibusdam' },
      { id: 8, text: 'illo expedita consequatur quia in' },
      { id: 9, text: 'quo adipisci enim quam ut ab' },
      { id: 10, text: 'molestiae perspiciatis ipsa' },
    ],
  },
  {
    id: 3,
    name: 'Today',
    tasks: [
      { id: 11, text: 'illo est ratione doloremque quia maiores aut' },
      { id: 12, text: 'vero rerum temporibus dolor' },
      { id: 13, text: 'ipsa repellendus fugit nisi' },
      { id: 14, text: 'et doloremque nulla' },
      { id: 15, text: 'repellendus sunt dolores architecto voluptatum' },
    ],
  },
  {
    id: 4,
    name: 'Done',
    tasks: [
      { id: 16, text: 'ab voluptatum amet voluptas' },
      { id: 17, text: 'accusamus eos facilis sint et aut voluptatem' },
      { id: 18, text: 'quo laboriosam deleniti aut qui' },
      { id: 19, text: 'dolorum est consequatur ea mollitia in culpa' },
      { id: 20, text: 'molestiae ipsa aut voluptatibus pariatur dolor nihil' },
    ],
  },
];

// let data2 = {
//   later: [
//     { 
//       id: 1, 
//       text: 'ullam nobis libero sapiente ad optio',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     { 
//       id: 2, 
//       text: 'delectus aut autem', 
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     { 
//       id: 3,
//       text: 'quis ut nam facilis et officia qui',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     {
//       id: 4,
//       text: 'fugiat veniam minus',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     {
//       id: 5,
//       text: 'et porro tempora',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//   ],
//   thisWeek: [
//     {
//       id: 6,
//       text: 'laboriosam mollitia et enim',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     {
//       id: 7,
//       text: 'qui ullam ratione quibusdam',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     { 
//       id: 8,
//       text: 'illo expedita consequatur quia in',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     { 
//       id: 9,
//       text: 'quo adipisci enim quam ut ab',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     { 
//       id: 10,
//       text: 'molestiae perspiciatis ipsa',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//   ],
//   today: [
//     {
//       id: 11,
//       text: 'illo est ratione doloremque quia maiores aut',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     {
//       id: 12,
//       text: 'vero rerum temporibus dolor',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     {
//       id: 13,
//       text: 'ipsa repellendus fugit nisi',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     {
//       id: 14, 
//       text: 'et doloremque nulla',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     { 
//       id: 15, 
//       text: 'repellendus sunt dolores architecto voluptatum',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//   ],
//   done: [
//     {
//       id: 16,
//       text: 'ab voluptatum amet voluptas',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     {
//       id: 17,
//       text: 'accusamus eos facilis sint et aut voluptatem',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     { 
//       id: 18,
//       text: 'quo laboriosam deleniti aut qui',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     { 
//       id: 19, 
//       text: 'dolorum est consequatur ea mollitia in culpa',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//     },
//     {
//       id: 20,
//       text: 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
//       timeSpentOnTask: 'some_time_format',
//       timeCreated: 'some_time_format'
//      },
//   ],
// }

let TaskStore = writable(data);

export default TaskStore;