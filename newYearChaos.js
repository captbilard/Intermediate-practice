//It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

//Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

function minimumBribes(q) {
    // Write your code here
    let bribes = 0
    let p1 = 1;
    let p2 = 2;
    let p3 = 3;
    
    for(let i=0; i< q.length; i++){
        if(q[i] == p1){
            p1=p2
            p2 = p3
            p3++
        }else if(q[i] == p2){
            bribes++
            p2 = p3
            p3++   
        }else if(q[i] == p3){
            bribes += 2
            p3++
        }else{
            console.log("Too chaotic")
            return
        }
    }
    console.log(bribes)
    return
}

minimumBribes([1, 2, 3, 5, 4, 6, 7, 8])
minimumBribes([4,1,2,3])