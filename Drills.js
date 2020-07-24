const LinkedList = require("./linkedList");
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');
const insertionSort = require('./insertionSort');

// 1. Understanding merge sort
// given this array [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
/*
  1. The array of [21, 1] will be the third recursive call
                        [21,1,26,45,29,28,2,9,16,49,39,27,43,34,46,40]
              [21,1,26,45,29,28,2,9]                      [16,49,39,27,43,34,46,40]
          [21,1,26,45]         [29,28,2,9]               [16,49,39,27]    [43,34,46,40]
      [21,1]  [26,45]         [29,28]  [2,9]          [16,49]  [39,27]       [43,34]  [46,40]
    [21] [1]  [26] [45]     [29] [28]  [2] [9]      [16] [49]  [39] [27]   [43] [34]  [46] [40]                                            
  
  2. The array of [46, 40] will be the 16th recursive call
  3. The first two lists to be merged are [21] and [1]
  4. [21,1,26,45] [29,28,2,9] are the two lists used on the 7th merge
*/


// 2. Understanding quicksort
/*
  1. c) Neither 14 nor 17 could have been the pivot
  2. [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
    LAST ITEM IN PIVOT
    [10, 17, 13, 15, 19, 14, 3, 16, 9, 12]
    
    FIRST ITEM IN PIVOT
    Because the first item is pivot, we start at the end of the array and loop backwards.
    [14, 17, 13, 15, 19, 10, 3, 12, 9, 16]
*/ 




let arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]


// 3. Implementing quicksort
// console.log(quickSort(arr));


// 4. Implementing merge sort
// console.log(mergeSort(arr));



// 5. Sorting a linked list using merge sort


const ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(3);
ll.insertFirst(9);
ll.insertFirst(2);
ll.insertFirst(5);
ll.insertFirst(3);

function linkedMSort(linkedList){
    const tempArr = [];
    let current = linkedList.head;
    while (current !== null) {
      tempArr.push(current.value);
      current = current.next;
    }
    mergeSort(tempArr);
    const newLinkedList = new LinkedList();
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] === tempArr[0]) {
        newLinkedList.insertFirst(tempArr[i]);
        continue;
      }
      newLinkedList.insertLast(tempArr[i]);
    }
    return newLinkedList;
  }
  
//   console.log(linkedMSort(ll));


//6. Bucket sort 
function bucketSort(arr, min, max, size = arr.length) {
    if (arr.length === 0) {
        return arr;
    }
    size = size || 5;

    let bucketCount = Math.floor((max - min / size + 1));
    let buckets = new Array(bucketCount);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - min) / size)].push(arr[i]);
    }

    arr.length = 0;
    for (let i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }
    return arr;
}

// console.log(bucketSort(arr, 1, 98));

//7. Sort in place
let sortedArr = [1, 2, 3, 4, 5, 6];

function sortInPlace(arr) {

}   



// 8. Sorting books
const test = ['The Big Fox', 'A Car Stole My Dog', 'Zebras Are Cool', 'The Big Apple', 'Lord of the Rings', 'The Witcher', 'Catcher in the Rye'];
function sortBooks(arr) {
  return insertionSort(arr);
}
// console.log(sortBooks(test))