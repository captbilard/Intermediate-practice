//Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

function gridChallenge(grid) {
    // Write your code here
    let str = ''
    for(let i=0; i < grid.length; i++){
        grid[i] = grid[i].split("").sort().join("")
    }
    for(let col=0; col < grid[0].length; col++){
        for(let row =0; row < grid.length; row++){
             str+= grid[row][col]
        }
        if(str != str.split("").sort().join("")){
            return "NO"
            break
        }else{
            str = ''
        }
    }
    return "YES"
}

function gridChallenge1(grid) {
    // Write your code here
    for(let i=0; i < grid.length; i++){
        grid[i] = grid[i].split("").sort().join("")
    }
    for(let col=0; col < grid[0].length; col++){
        for(let row =0; row < grid.length - 1; row++){
            if(grid[row][col] > grid[row+1][col]){
                return "NO"
            }
        }

    }
    return "YES"
}

let grid = ["abc","hjk","mpq","rtv"]
console.log(gridChallenge(grid))