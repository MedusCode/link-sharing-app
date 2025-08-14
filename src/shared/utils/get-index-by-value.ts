function getIndexByValue<T, K extends keyof T>(
  items: T[],
  value: T[K] | null | undefined,
  key: K
): number | null {
  if (value == null) return null;
  const i = items.findIndex(it => it[key] === value);
  return i === -1 ? null : i;
}

export default getIndexByValue;
