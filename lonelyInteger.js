//Given an array of integers, where all elements but one occur twice, find the unique element.


function lonelyinteger(a) {
    // Write your code here
    const obj = {}
    a.forEach((item) => {
        obj.hasOwnProperty(item) ? obj[item]++ : obj[item] = 1
    })
    for(const prop in obj){
        if(obj[prop] == 1){
            return prop
        }
    }

}

lonelyinteger([1,2,3,4,3,1,2])