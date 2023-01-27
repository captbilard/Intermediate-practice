//Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

function caesarCipher(s, k) {
    // Write your code here
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let rotatedAlphabet = alphabet.split("")
    for(let i=0; i<k; i++){
        let letter = rotatedAlphabet.shift()
        rotatedAlphabet.push(letter)
    }
    rotatedAlphabet = rotatedAlphabet.join("")
    let response = ''
    for(const c of s){
        let letter = c.toLowerCase()
        if(alphabet.includes(letter)){
            letter = rotatedAlphabet.charAt(alphabet.indexOf(letter))
            response += c == c.toUpperCase() ? letter.toUpperCase() : letter
        }else{
            response += c
        }
    }
    return response
}
let s = "middle-Outz"
console.log(caesarCipher(s, 2)) // run time of O(n)