// You are given an array with integers. Write a program to modify the elements after receiving the following commands:
// "swap {index1} {index2}" takes two elements and swap their places.
// "multiply {index1} {index2}" takes element at the 1st index and multiply it with the element at 2nd index. Save the product at the 1st index.
// "decrease" decreases all elements in the array with 1.
// Input
// On the first input line, you will be given the initial array values separated by a single space.
// On the next lines, you will receive commands until you receive the command "end". The commands are as follows: 
// "swap {index1} {index2}"
// "multiply {index1} {index2}"
// "decrease"
// Output
// The output should be printed on the console and consist of elements of the modified array – separated by a comma and a single space ", ".
// Constraints
// Elements of the array will be integer numbers in the range [-231...231].
// Count of the array elements will be in the range [2...100].
// Indexes will be always in the range of the array.

function arrayModifier(arr) {
    let curArr = arr.shift();
    let newArr = curArr.split(' ').map(Number);

    for (let el of arr) {
        let tokens = el.split(' ');

        let command = tokens[0];
        let positionTobeChanged = Number(tokens[1]);
        let nextPositionToBeChanged = Number(tokens[2]);

        if (command == 'swap') {
            let curr = newArr[positionTobeChanged];
            newArr[positionTobeChanged] = newArr[nextPositionToBeChanged];
            newArr[nextPositionToBeChanged] = curr;


        } else if (command == 'multiply') {
            let result = newArr[positionTobeChanged] * newArr[nextPositionToBeChanged];

            newArr.splice(positionTobeChanged, 1, result);

        } else if (command == 'decrease') {
            for (let i = 0; i < newArr.length; i++) {
                newArr[i] = newArr[i] - 1;

            }
        }
    }
    console.log(newArr.join(', '));
}

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])