import { writable } from 'svelte/store';
import type { pageType } from '../types';
let page: pageType = 'dashboard';
let PageStore = writable(page);
export default PageStore;