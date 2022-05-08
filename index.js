// Code your solution here
function fuzzyMatch(array, str) {
  const newArray = array.filter(
    (record) =>
      record.toLowerCase().startsWith(str.toLowerCase())
  );

  return newArray
}

function matchName(array, input) {
  const newArray = array.filter((record) => record.name === input);
  return newArray
}