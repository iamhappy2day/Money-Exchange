
module.exports = function makeExchange(currency) {
     // Your code goes here!
    
     const h = 50, q = 25, d = 10, n = 5, p = 1;
     let h1, q1, d1, n1, p1;
         
     // Check 1. If the argument <= 0
     if (currency <= 0){
        return {};
     }
     // Check 2. If the argument > 10k
     if (currency > 10000){
        return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
     }
     if (currency >= 50 && currency <= 10000){
         h1 = (currency - currency%h)/h;
         makeExchange(currency%h);
         return Object.assign({"H":h1}, makeExchange(currency%h));
     }
     if (currency >= 25 && currency < 50){
         q1 = (currency - currency%q)/q;
         makeExchange(currency%q);
         return Object.assign({"Q":q1}, makeExchange(currency%q));
         
     }
     if (currency>=10 && currency<25){
         d1 = (currency - currency%d) / d;
         makeExchange(currency%d);
         return Object.assign({"D":d1}, makeExchange(currency%d));
         
     }
     if(currency >= 5 && currency < 10){
         n1 = 1; 
         makeExchange(currency - n);
         return Object.assign({"N":n1}, makeExchange(currency - n));
     }
     
     if (currency<5){
         p1 = currency;
         return {"P":p1};
     }
    
 }

