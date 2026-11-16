export const interpolate = <T>(value: T, values: Record<string, string>): T => {
  if (typeof value === 'string') {
    return value.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match) as T;
  }

  if (Array.isArray(value)) return value.map((item) => interpolate(item, values)) as T;

  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, interpolate(item, values)])) as T;
  }

  return value;
};
