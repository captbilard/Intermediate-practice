//Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

function countingSort(arr) {
    // Write your code here
    const freqArr = Array.from({length:arr.length}, (v,i) => i*0)
    for(let i=0; i< arr.length; i++){
        freqArr[arr[i]]++
    }
    return freqArr

}
console.log(countingSort([1,1,3,2,1]))
