/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
    Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
    input - 06:40:03AM"
 */

function timeConversion(s) {
    // Write your code here
    const strArr = s.split(":")
    const indicator= strArr[2].slice(2)
    const counter = 12
    let hr
    let min = strArr[1]
    let sec = strArr[2].slice(0,2)
    if(strArr[0] == "12" && indicator == "AM"){
        hr = "00"
    }else if(strArr[0] == "12" && indicator == "PM"){
        hr = strArr[0]
    }else if(indicator == "PM"){
        hr = counter + +strArr[0]
    }else{
        hr = strArr[0]
    }
    return `${hr}:${min}:${sec}`
    

}
console.log(timeConversion("06:40:03PM"))