import { writable } from 'svelte/store';

import type { taskType } from '../../types/types';

const initValue = [] as taskType[];
export const tasks = writable(initValue);
