'use strict';

const LinkedList = require('./LinkedList');

const dataset = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function partition(arr, start, end) {
  const pivot = arr[end - 1];
  for (let i = start; i < end - 1; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, start);
      start++;
    }
  }
  swap(arr, end - 1, start);
  return start;
}

function qSort(arr, start = 0, end = arr.length) {
  if (start >= end) {
    return arr;
  }
  const middle = partition(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle + 1, end);
  return arr;
}

// console.log(qSort(dataset));

function merge(left, right, arr) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr[outputIndex++] = left[leftIndex++];
    }
    else {
      arr[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    arr[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    arr[outputIndex++] = right[i];
  }
  return arr;
}

function mSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, arr);
}

// console.log(mSort(dataset));




// const LL = new LinkedList();
// for (let i = 0; i < dataset.length; i++) {
//   LL.insertLast(dataset[i]);
// }

// function mergeLL(left, right) {
//   let result = new LinkedList();

//   let resultIndex = result.head;
//   let leftIndex = left;
//   let rightIndex = right;

//   while (leftIndex && rightIndex) {
//     let tempNode = null;

//     if (leftIndex.node > rightIndex.node) {
//       tempNode = rightIndex.node;
//       rightIndex = rightIndex.next;
//     }
//     else {
//       tempNode = leftIndex.node;
//       leftIndex = leftIndex.node;
//     }

//     if (result.head === null) {
//       result.insertLast(tempNode);
//     }
//   }

//   while (resultIndex.next) {
//     resultIndex = resultIndex.next;
//     resultIndex.next = rightIndex;
//   }

//   return result.head;
// }

// function mSortLL(list) {
//   if (list.next === null) return list;

//   let count = 0;
//   let countList = list.head;
//   let leftPart = list;
//   let leftIndex = list.head;
//   let rightPart = null;
//   let rightIndex = null;

//   while (countList.next !== null) {
//     count++;
//     countList = countList.next;
//   }

//   let middle = Math.floor(count / 2);
//   let count2 = 0;

//   while (count2 < middle) {
//     count2++;
//     leftIndex = leftIndex.next;
//   }

//   rightPart = new LinkedList();
//   rightPart.insertLast(leftIndex.next);
//   leftIndex.next = null;

//   return mergeLL(mSortLL(leftPart)), mSortLL(rightPart.head);
// }






// console.log(mSortLL(LL));


function bucketSort(arr) {
  let done = false;
  let temp;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
const list = [5, 2, 11, 9, 7, 3, 15, 8, 12, 13];

// console.log(bucketSort(list));

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * arr.length);
    swap(arr, i, j);
  }
  return arr;
}

// console.log(shuffle(dataset));

function letterSort(insert) {
  let arr = []
  for (let i = 0; i < insert.length; i++) {
    arr.push(insert[i].toLowerCase());
  }
  let done = false;
  let temp;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp
      }
    }
  }
  return arr;
}
// list = [5,2,11,9,7,3,15,8,12,13]
const books = ['Shawty', 'onion', 'time', 'it', 'nothing', 'gal', 'ahh', 'abba'];

console.log(letterSort(books));