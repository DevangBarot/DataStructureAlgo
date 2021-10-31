//[99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = numbers.length;
  for(let i = 0; i< length; i++){
    let min = i;
    let temp = array[i];

    for(let j = i+1; j < length; j++){
      if(array[j] < array[min]){
        //update the minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp; 
  }
  return array
}

selectionSort(numbers);
console.log(numbers)