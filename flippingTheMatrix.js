// Sean invented a game involving a 2n x 2n matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the n x n submatrix located in the upper-left quadrant of the matrix.

// Given the initial configurations for q matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.

//Solution is to picture each quadrant of the matrix as a mirror, then flip each quadrant clockwise to form the other quadrants of the matrix. Then compare all A's & get the max,do same for B's, C's, D's. Then sum up all the max values.

/**
 *      A  B | B A
 *      C  D | D C
 *      -----|-----
 *      C  D | D C
 *      A  B | B A
 */


function flippingMatrix(matrix) {
    // Write your code here
    const len = matrix.length
    let sum = 0
    
    for(let row = 0; row < len/2; row++){
        for(let col = 0; col < len/2; col++){
            sum += Math.max(matrix[row][col], matrix[row][len - col - 1], matrix[len - row - 1][col], matrix[len - row -1][len - col -1])
        }
    }
    return sum

}

let matrix = matrix = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]
console.log(flippingMatrix(matrix))