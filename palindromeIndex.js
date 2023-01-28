//Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed to make the string a palindrome. There may be more than one solution, but any will do. If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove.

function palindromeIndex(s) {
    // Write your code here
    const reversed = s.split("").reverse().join("")
    if(reversed == s){
        return -1
    }
    let i =0 
    let j = s.length - 1
    
    while(i<= j){
        if(s[i] !== s[j]){
            if(s[i+1] == s[j] && s[i+2] == s[j-1]){
                return i
            }
            return j
        }
        i++
        j--
    }
    return -1 
}

console.log(palindromeIndex("hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh"))