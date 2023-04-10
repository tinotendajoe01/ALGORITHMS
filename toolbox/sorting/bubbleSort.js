function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap items
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; //returns sorted array
}

// example usage
const arrys = bubbleSort([3, 6, 1, 56, 45, 3, 45, 4, 78, 5]);
console.log(arrys);
