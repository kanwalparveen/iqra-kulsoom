let car:string ='sana'; 
//Test 1 :equality comparison(true)
console.log ("Is car=='sana' ?Ipredict True.");
console.log (car=='sana') //True
//Test 2 strict qualit comparison(True)
console.log("Is car=='sana'?Ipredict True");
console.log (car=='sana')//True
//Test 3 Inequality comparison (False)
console.log ("Is car ! ='sana'? I predict False,");
console.log (car ! = 'sana');// False
//Test 4 strick inequality comparison (False)
console.log ("Is car !== 'sana'? I predict False,");
console.log (car ! ='sana'); //False
// Test 5 less than comparison  (False)
console.log ("Is car <'sana'? I predict False");
console.log(car < 'sana'); // False(lexicographic comparison)
//Test 6 Greater than comparison(False)
console.log ("Is car <'sana'? I predict Flse ");
console.log (car <'sana');// False(lexicographic comparison)
//Test 7 Less than or equal comparison
console.log("Is cae <='sana ? I predict True");
console.log (car <='sana');//True
//Test 8 Greater than or equal comparison(True)
console.log ("Is car >='sana ? I predict True");
console.log (car >'sana');// True
//Test 9 checking truthiness (True)
console.log("Is car ? Ipredict True");
console.log(car); // True (non-empty string is teuthy)
// Test 10 checking Falsiness (False)
console.log ("Is | car ? Ipredict False");
console.log (car); //False (negation of a truthy valuse)