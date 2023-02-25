function getMin(array) {
  let min;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (min === undefined || element < min) {
      min = element;
    }
  }
  return min;
}
const array = [2, 3, 4, 51];
getMin(array);
