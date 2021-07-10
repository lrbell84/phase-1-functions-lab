const distance = 42;
let block = 43;
function distanceFromHqInBlocks(block) {
    let dist = block - distance;
     if (dist < 0 ) {
        dist = dist * -1;
    }
    return dist;
}// Code your solution in this file!

function distanceFromHqInFeet(block){
   return distanceFromHqInBlocks(block) * 264;
} 
 
 function distanceTravelledInFeet(begin, end) {
     if (begin < end) {
    return (end - begin) * 264; 
     } else {
       return (begin - end) * 264; 
    }
 }
   
   function calculatesFarePrice (start, destination){
       const distance = distanceTravelledInFeet(start, destination);
       
       if (distance <= 400) {
           return 0;
       } else if (distance > 400 && distance <= 2000) {
           return .02 * (distance - 400);
       } else if (distance > 2000 && distance < 2500) {
           return 25;
       } else {
           return 'cannot travel that far';
       }
   }

    