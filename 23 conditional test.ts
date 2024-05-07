let cars:string='subaru';
//Test1:equality comparison(true).
console.log("Is car=='subaru'? I predict True.");  
console.log( cars =='subaru');//True.
//Test2:strict equalit comparison(True)
console.log("Is car=='subaru'?I predict true.");
console.log( cars =='subaru');//True.
//Test3:In equality comparison(false)
console.log("Is car ! =='subaru'?I predict fales.");
console.log(cars ! =='subaru');//false
// Test4:strici inequality comparison(false)
console.log("Is car !=='subaru'?I predict false.");
console.log(cars ! =='subaru');//false
//Test5:Less than comparison(false)
console.log("Is car<'subaru'?I predict fales.");
console.log(cars <'subaru');//fales(lexicographic comparison)
//Test6:Greater than comparison(fales)
console.log("Is car>'subaru'?I predict fales.");
console.log(cars >'subaru');//fales(lexicographic comparison)
//Test7:less than or equal comparison)(True)
console.log(" Is car<'subaru'?I predict True.");
console.log(cars<'subaru');//True
//Test8:Greater than or equal comparison(true)
console.log("Is car>'subaru'?I predict True.");
console.log(cars >'subaru');//True
//Test9:checking truthiness(True)
console.log("Is car?I predict True.");
console.log(cars);//True(non empty truth string is truthly)
//Test10:checking falesiness(fales)
console.log("Is  car ?I predict fales.");
console.log( ! cars );//fales(negation of a truthly value)
