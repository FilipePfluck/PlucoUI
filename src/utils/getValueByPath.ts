// using any here because nested types are overly complicated
// eslint-disable-next-line
export function getValueByPath(obj: any, path: string): any {
  const keys = path.split('.')
  // eslint-disable-next-line
      return keys.reduce((accumulator: any, currentKey: string) => {
    return accumulator && accumulator[currentKey] !== undefined
      ? accumulator[currentKey]
      : undefined
  }, obj)
}
