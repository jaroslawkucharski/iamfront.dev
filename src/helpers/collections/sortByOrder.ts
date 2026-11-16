export const sortByOrder = <Entry extends { data: { order: number } }>(entries: Entry[]): Entry[] =>
  [...entries].sort((first, second) => first.data.order - second.data.order);
