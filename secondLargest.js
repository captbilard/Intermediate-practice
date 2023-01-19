const findSecondLargest = (arr) => {
    let largest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        }
    }
    return secondLargest
}

console.log(findSecondLargest([2,5,8,3,9,6]))
console.log(findSecondLargest([2,3,4,5,6,7,8,9]))