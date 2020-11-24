export type taskType = {
  text: string;
  status: 'Later' | 'This week' | 'Today' | 'Done';
  id: number;
}