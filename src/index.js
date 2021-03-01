
exports.min = function min (array) {
  let min = 0;
  if (array == undefined) {
    return 0;
  } else if (array.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
      }
    }
    return min;
  }
}

exports.max = function max (array) {
  let max = 0;
  if (array == undefined) {
    return 0;
  } else if (array.length < 1){
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    return max;
  }
}

exports.avg = function avg (array) {
  let avg = 0;
  if (array == undefined) {
    return 0;
  } else if (array.length < 1) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      avg += array[i];
    }
    return avg/array.length;
  }
}
