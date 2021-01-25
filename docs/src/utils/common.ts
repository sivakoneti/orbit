export const omitNumbers = str =>
  str
    .split("/")
    .map(s => s.replace(/^\d+-\s*/g, ""))
    .join("/");

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);