"use strict";
// ^^ this statement must be declared at the top of the file (comments are fine to be before it)

/* 
this mode helps us to find bugs
1. It forbids us from doing certain things
2. It will create visibile errors (in certain situations), where normally it would just fail silently
3. Introduces a short set of names that are reserved to possibly be added to the language later (won't let you use it as a variable name):
    a. Like using "const interface = " will return an error "Unexpected strict mode reserved word". ('private' is another word)
    b.  This way you are aware not to use a word that may end up causing an impact to your program at a later date

The following is one of the most important changes 'strict mode' makes:
*/
let hasDriversLicense = false;
const passTest = true;

// did not spell hasDriversLicense properly on purpose
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive");
