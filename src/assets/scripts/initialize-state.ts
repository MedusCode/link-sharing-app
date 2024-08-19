const initializeState = <T extends string, U, V>(
  obj: Record<T, U>,
  initializer: (key: T, value: U) => V
): Record<T, V> => {
  return Object.keys(obj).reduce((acc, key) => ({
    ...acc,
    [key]: initializer(key as T, obj[key as T])
  }), {} as Record<T, V>);
}

export default initializeState;
