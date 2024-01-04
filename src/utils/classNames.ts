const classNames = (...values: Array<string | boolean | null | undefined>) => {
  const joined = values.filter((v) => v).join(' ')

  return joined
}

export default classNames
