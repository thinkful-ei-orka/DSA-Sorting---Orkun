function insertionSort(array) {
    let length = array.length;
    let j; 
    for(let i = 1; i < length; i++) {
      let temp = array[i];
      for(j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    return array;
  }
  
  module.exports =  insertionSort;