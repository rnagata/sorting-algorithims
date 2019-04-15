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

console.log(`Bubblesort: ${unsortedArr2} ----> ${quickSort(unsortedArr2)}`);

/* Insertion Sort:
Steps through the unsorted array, choosing one input element each repetition to place into the sorted
section of the array. Shift other elements greater than the inserted value up.
*/
function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let valueToSort = items[i]
    for (var compIndex = i - 1; compIndex > -1 && items[compIndex] > valueToSort; compIndex--) {
      items[compIndex + 1] = items[compIndex];
    }
    items[compIndex + 1] = valueToSort;
  }

  return items;
}

console.log(`Insertion Sort: ${unsortedArr3} ----> ${quickSort(unsortedArr3)}`);

/* Selection Sort:
Iterates through the given array and finds the smallest value, then places that value to the beginning of 
the array where it is considered part of a sorted sub-list. Process repeats until all unsorted values
have moved to the sorted values, always picking the smallest value in the unsorted values each iteration.
*/
function selectionSort(arr, unsortedStart){
  if (unsortedStart >= arr.length - 1){
    return arr;
  }
  let unsortedItems = arr.slice(unsortedStart, arr.length);
  let smallestValue = unsortedItems[0];
  unsortedItems.forEach((element) => {
    if (element < smallestValue){
      smallestValue = element;
    }
  });
  let prevSmallIndex = unsortedItems.indexOf(smallestValue);
  let temp = unsortedItems[0];
  unsortedItems[0] = unsortedItems[prevSmallIndex];
  unsortedItems[prevSmallIndex] = temp;
  arr.splice(unsortedStart, arr.length);
  arr = arr.concat(unsortedItems);
  return selectionSort(arr, ++unsortedStart);
}

console.log(`Selection Sort: ${unsortedArr4} ----> ${selectionSort(unsortedArr4, 0)}`);

/**Merge Sort:
 * Divide incoming list / array into smaller lists / arrays of one element. Repeatedly merge sublists
 * to produce sorted sublists until there is only one sublist remaining which will be the sorted list.
 */
let i = 2;

function mergeSort(arr){
  let sublists = [];
  arr.forEach((item) => sublists.push([item]));
  for (i = 0; i < sublists.length; i++){
    if (!sublists[i+1]){
      continue;
    }
    if (sublists[i][0] > sublists[i+1][0]){
      sublists[i] = [sublists[i+1][0], sublists[i][0]];
    } else {
      sublists[i] = [sublists[i][0], sublists[i+1][0]];
    }
    sublists.splice(i+1,1);
  }
  console.log(sublists);
}

mergeSort(unsortedArr5);