const minMaxSum = (arr) => {
    const sum = arr.reduce((a, c) => a + c, 0)
    const minSum = sum - Math.max(...arr)
    const maxSum = sum - Math.min(...arr)
    
    console.log(`MinSum: ${minSum}  MaxSum:${maxSum}`)
}

minMaxSum([1,2,3,4,5,6,7,8,9])