let ticketPrice = 800;
let age = 59;

if(age < 10){
    console.log(ticketPrice= 'free')
}
else if( age < 18 ){
    // 50% discount
    let discount = ticketPrice * 50 / 100 ;
    let payAmount = ticketPrice - discount;

    console.log(payAmount);
}

else if(age >= 60 ){
    // 30% 
let discount = ticketPrice * 30 / 100 ;
let payAmount = ticketPrice - discount ;

console.log(payAmount);
}
else {
    // let payAmount = ticketPrice ;
    console.log(ticketPrice);
}