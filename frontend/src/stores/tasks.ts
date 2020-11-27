import { writable } from 'svelte/store';

import type { dashboardStateType } from '../../types/types';

const initState: dashboardStateType = {
  later: [],
  thisWeek: [],
  today: [],
  done: [],
};

const generateItems = () => {
  let x = 0;
  for (let i = 0; i < 5; i++) {
    initState.later.push({ text: `This is task #${x}`, id: x });
    x++;
  }
  for (let i = 0; i < 5; i++) {
    initState.thisWeek.push({ text: `This is task #${x}`, id: x });
    x++;
  }
  for (let i = 0; i < 5; i++) {
    initState.today.push({ text: `This is task #${x}`, id: x });
    x++;
  }
  for (let i = 0; i < 5; i++) {
    initState.done.push({ text: `This is task #${x}`, id: x });
  }
};

generateItems();

export const tasks = writable(initState);
