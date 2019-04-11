let unsortedArr = [10, 6, 2, 8, 3, 9, 1, 7, 4, 5, 0];
let unsortedArr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let unsortedArr3 = [7, 9, 3, 4, 10, 8, 5, 6, 1, 2, 3];

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

console.log(`Quicksort Arr 1: ${unsortedArr} ----> ${quickSort(unsortedArr)}`);
console.log(`Quicksort Arr 2: ${unsortedArr2} ----> ${quickSort(unsortedArr2)}`);
console.log(`Quicksort Arr 3: ${unsortedArr3} ----> ${quickSort(unsortedArr3)}`);

/*Bubble Sort:
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

console.log(`Bubblesort Arr 1: ${unsortedArr} ----> ${bubbleSort(unsortedArr)}`);
console.log(`Bubblesort Arr 2: ${unsortedArr2} ----> ${bubbleSort(unsortedArr2)}`);
console.log(`Bubblesort Arr 3: ${unsortedArr3} ----> ${bubbleSort(unsortedArr3)}`);