//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
    // Write your code here
    let primDiag = 0
    let secDiag = 0
    let j = arr.length -1
    
    for(let i=0; (i<arr.length && j >= 0); i++){
        primDiag += arr[i][i]
        secDiag += arr[i][j]
        j--
    }
    return Math.abs(primDiag - secDiag);
}

const x = [[11,2,4],[4,5,6],[10,8,-12]]
console.log(diagonalDifference(x))