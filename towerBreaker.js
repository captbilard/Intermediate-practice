// Link to challenge https://www.hackerrank.com/challenges/one-week-preparation-kit-tower-breakers-1/problem#:~:text=The%20players%20move%20in%20alternating,move%2C%20they%20lose%20the%20game.
/**
 * 
 * n = num of towers
 * m = initial height of both towers
 * x = current height of the tower
 * y = new height of the tower i.e (x is divisible by y)
 * Each player can only reduce the tower to height of 1 & can only affect one tower at a time
 * When n == 1, player 1 always win
 * When m == 1, player 2 always win
 * When n is even player 2 always win
 * when n is odd, player 1 always win
 * returns the win player number
 */

function towerBreakers(n, m) {
    // Write your code here
   if(m == 1 || n%2 == 0){
       return 2
   }else{
       return 1
   }

}