function countingSort(arr) {
    // Write your code here
    const freqArr = Array.from({length:arr.length}, (v,i) => i*0)
    for(let i=0; i< arr.length; i++){
        freqArr[arr[i]]++
    }
    return freqArr

}
console.log(countingSort([1,1,3,2,1]))
