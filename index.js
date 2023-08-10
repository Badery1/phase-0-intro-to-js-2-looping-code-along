function writeCards(names, eventName) {
    let cardboys = [];
    for (let i = 0; i < names.length; i++) {
        cardboys.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        
        
    }
    return cardboys;
};
function countDown(num) {
   
   if (num != 4) {
    while (num >= 0) {
            console.log()    
            num--;
            
        }
    }      
    if(num === 4) {
        while (num >= 0) {
            console.log(num)
            num--
        }
    }
}
