/**
 * Suppose there is a circle. There are N petrol pumps on that circle. Petrol pumps are numbered 0 to (N-1) (both inclusive). You have two pieces of information corresponding to each of the petrol pump: (1) the amount of petrol that particular petrol pump will give, and (2) the distance from that petrol pump to the next petrol pump.

Initially, you have a tank of infinite capacity carrying no petrol. You can start the tour at any of the petrol pumps. Calculate the first point from where the truck will be able to complete the circle. Consider that the truck will stop at each of the petrol pumps. The truck will move one kilometer for each litre of the petrol.

A better explanation is, we know the following
- AOG (Amount of petrol in each pump)
- DTNP (Distance to Next Pump)
The approach is to set our current petrol to zero, then loop over the array of petrol pumps, at each pump 
currentPetrol = currentPetrol + AOG - DTNP
if currentPetrol positive, then that index is our current start point. else we reset our current petrol back to zero & ignore that index
 */


function truckTour(petrolpumps) {
    // Write your code here
    let currentPetrol = 0
    let possibleStart = -1
    for(let i=0; i<petrolpumps.length; i++){
        currentPetrol = currentPetrol + petrolpumps[i][0] - petrolpumps[i][1]
        if(currentPetrol > 0 && possibleStart == -1){
            possibleStart = i
        }else if(currentPetrol < 0){
            possibleStart = -1
            currentPetrol = 0
        }
    }
    return possibleStart
}

console.log(truckTour([[1,5], [10,3], [3,4]]))