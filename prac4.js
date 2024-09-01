const myScore = 72 ;
const fScore = 90 ;


if (myScore > 80){
    console.log("Inside your friend's score.");

    if(fScore > 80 ){
        console.log('Go for a lunch')
    }
    else if(fScore < 80 && fScore >= 60){
        console.log('Good luck next time')
    }
    else if(fScore < 60 && fScore >= 40){
        console.log('Message Unseen ')
    }
    else if(fScore < 40){
        console.log('Block')
    }
}
else {
   console.log('Go home and act sad')
}