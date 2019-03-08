// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) {
    const sum = [];

    for(let i = 0; i < inputArray.length; i++) {
        sum.push(inputArray[i] * inputArray[i + 1]);
    }

    let ansewr = sum.sort(function(a, b) {
        return a - b;
      });

    return ansewr[ansewr.length - 2];
}

function adjacentElementsProduct(inputArray) {
    let max = inputArray[0] * inputArray[1];

    for(let i = 0; i < inputArray.length; i++){
        if(max <= inputArray[i] * inputArray[i+1]) {
            max = inputArray[i] * inputArray[i+1];
        }
    }

    return max;

}


console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);