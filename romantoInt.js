/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumerals = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    const totalArr = []
    let currentValue
    for(let i=s.length - 1; i >= 0; i--){
        if((s.charAt(i) === "V" || s.charAt(i) === "X") && (s.charAt(i-1) === "I")){
            currentValue = romanNumerals[s.charAt(i)] - romanNumerals[s.charAt(i-1)]
            totalArr.push(currentValue)
            i = i-1
        }else if((s.charAt(i) === "L" || s.charAt(i) === "C") && (s.charAt(i-1) === "X")){
            currentValue = romanNumerals[s.charAt(i)] - romanNumerals[s.charAt(i-1)]
            totalArr.push(currentValue)
            i = i - 1
        }else if((s.charAt(i) === "D" || s.charAt(i) === "M") && (s.charAt(i-1) === "C")){
            currentValue = romanNumerals[s.charAt(i)] - romanNumerals[s.charAt(i-1)]
            totalArr.push(currentValue)
            i = i - 1
        }else{
            currentValue = romanNumerals[s.charAt(i)]
            totalArr.push(currentValue)
        }
    }
    
    return totalArr.reduce((a,b) => a+b,0)
};