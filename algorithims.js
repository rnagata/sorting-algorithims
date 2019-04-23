'use strict';

let unsortedArr = [10, 6, 2, 8, 3, 9, 1, 7, 4, 5, 0];
let unsortedArr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let unsortedArr3 = [7, 9, 3, 4, 10, 8, 5, 6, 1, 2, 3];
let unsortedArr4 = [10, 5, 3, 4, 100, 3333, 51];
let unsortedArr5 = [34, 10, 57, 45, 9806, 298239824, 328723];

// Quicksort, Bubblesort, Insertion Sort, Selection, Merge

/* Quick Sort:
Chooses a pivot value and separates the unsorted array into two halves, lowValues
and highValues, separated by the pivot value. This process repeats until the result
array contains one element or nothing. Then the result arrays are recombined with 
lowest values on left, pivot in middle, and highest values on the right.
*/
function quickSort(numArr){
  debugger;
  let pivot = numArr[0];
  let lowValues = [];
  let highValues = [];
  
  if(numArr.length <= 1){
    return numArr;
  }
  for (let i = 1; i < numArr.length; i++){
    if (numArr[i] > pivot){
      highValues.push(numArr[i]);
    } else {
      lowValues.push(numArr[i]);
    }
  }
  
  return quickSort(lowValues).concat(pivot, quickSort(highValues));
};

console.log(`Quicksort: ${unsortedArr} ----> ${quickSort(unsortedArr)}`);

/* Bubble Sort:
Steps through the unsorted array and compares adjacent values. The highest value
moves right and upon reaching the final pair the process restarts, comparing one less
element, which should hold the highest value from the preceeding pass. 
*/
function bubbleSort(arr){
  let lastIndex = arr.length - 1

  while (lastIndex >= 1){
    for (let leftIndex = 0; leftIndex < lastIndex; leftIndex++){
      if (arr[leftIndex] > arr[leftIndex + 1]){
        let temp = arr[leftIndex + 1];
        arr[leftIndex + 1] = arr[leftIndex];
        arr[leftIndex] = temp;
      }
    }
    lastIndex--;
  }
  
  return arr;
}

console.log(`Bubblesort: ${unsortedArr2} ----> ${bubbleSort(unsortedArr2)}`);

/* Insertion Sort:
Steps through the array, inspecting previous elements for the lowest value which 
is greater than the step value. If no greater value exists then nothing happens 
and the next step is reached. But if there is a lowest greater value, the current 
step's value is cut from the array and placed where the lowest greater value was
found, shifting sorted items higher than the step value right and keeping the lower
values in place.
*/

function insertionSort(arr){
  let result = arr;
  let sort = 1;
  while (sort < arr.length){
    let newIndex = undefined;
    for (let comp = sort; comp >= 0; comp--){
      if (arr[comp] > arr[sort]){
        newIndex = comp;
      }
    }
    if (newIndex !== undefined){
      let temp = arr.splice(sort, 1);
      arr.splice(newIndex, 0, temp[0]);
    }
    sort++;
  }
  return result;
}

console.log(`Insertion Sort: ${unsortedArr3} ---> ${insertionSort2(unsortedArr3)}`);

/**
 * Selection Sort:
 * In place comparision sort. Left values are sorted, right values are unsorted.
 * An unsorted beginning index indicates where unsorted elements begin. 
 */
function selectionSort(arr, start){
  if (start === arr.length - 1){
    return arr;
  }

  let lowest = start;
  
  for (let i = start; i < arr.length; i++){
    if (arr[i] < arr[lowest]){
      lowest = i;
    }
  }

  let temp = arr[start];
  arr[start] = arr[lowest];
  arr[lowest] = temp;
  return selectionSort(arr, ++start);
}
console.log(`Selection Sort: ${unsortedArr4} ---> ${selectionSort(unsortedArr4, 0)}`);

/** Merge Sort:
 * Taken from: https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
 * First call divides unsorted list into two halves.
 * Left half is divided as it goes up the stack until all elements are in singular sublists.
 * Left half is merged with singular elements in order as it goes down the stack.
 * Right half is divided as it goes up the stack until all elements are in singular sublists.
 * Right half is merged with singular elements in order as it goes down the stack.
 * First call is finally taken off the stack, merging and returning left half and right half.
 * Returned result is a sorted list.
*/

function mergeSort (arr) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(
    mergeSort(left),
    mergeSort(right),
  )
}

function merge (left, right) {
  
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++
    } else {
      result.push(right[indexRight]);
      indexRight++
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(`Merge Sort: ${unsortedArr5} ---> ${mergeSort(unsortedArr5)}`);
