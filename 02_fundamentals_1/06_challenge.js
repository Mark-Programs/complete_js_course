// Challenge 4

/*
TIP CALCULATOR
Steven wants a tip calc.  In his country:
    if $50 < bill > $300 = tip 15%
    else tip 20%

Calculate tip and print amt to console:
"Bill: $###, Tip: $##, Total: $###"

*/

let check = 275;
let tip = check <= 300 && check >= 50 ? check * 0.15 : check * 0.2;

console.log(`Bill: $${check}, Tip: $${tip}, Total: $${check + tip}`);
