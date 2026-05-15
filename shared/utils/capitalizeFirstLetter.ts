const capitalizeFirstLetter = <T extends string>(string: T): Capitalize<T> => {
  return string.charAt(0).toUpperCase() + string.slice(1) as Capitalize<T>
}

export default capitalizeFirstLetter
