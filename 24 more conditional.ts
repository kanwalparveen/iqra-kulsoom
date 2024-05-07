let car:string='subaru';
let age:number= 21;
let number:number[]=[1,2,3,4];
//**string Tests**
//Test1:equality (true).
console.log("Is car == 'subaru'? I predict True.");  
console.log(car == 'subaru');//True(case sensitive)
//Test2: equalit (false)
console.log("Is car == 'subaru'?I predict fales.");
console.log(car == 'subaru');//false(case sensitive)
//Test3:In equality (True)
console.log("Is car ! ='Toyota'?I predict True");
console.log(car ! =='Toyota');//True
// Test4: inequality (false)
console.log("Is car ! =='subaru'?I predict false.");
console.log(car  !=='subaru');//false(case sensitive)
//**Lowercase funcation Tests** 
//Test5: Lowercase conversion(True)
console.log("Is car.toLowercase() =='subaru'?I predict True.");
console.log(car .toLowerCase() =='subaru.');//True(converted to lowercase)
//Test6:Lowercase conversion (fales)
console.log("Is car ===car.tolowercase()?I predict fales.");
console.log(car === car.toLowerCase());//fales(original value remains uppercase)
//**Numerical Tests** 
//Test7:Equality(True)
console.log(" Is age == 21?I predict True.");
console.log(age == 21);//True
//Test8:Inequality(fales)
console.log("Is age != 30?I predict fales.");
console.log(age !=30);//Fales
//Test9:Greater than(fales)
console.log("Is age > 30?I predict fales.");
console.log(age > 30);//false
//Test10:less than or equal(True)
console.log("Is age<=  25?I predict True.");
console.log(age <= 25);//True
//**Logical operator** 
//Test11:AND (True)
console.log("Is age >20 && age < 30?I predict True.");
console.log(age > 20 && age < 30);//True(both conditions met)
//Test12:OR(fales)
console.log("Is age > 30 || age < 18?I predict false.");
console.log(age > 30 || age < 18);//false(neither condition met)
//**Array Tests **
//Test13:In array(True)
console.log("Is 3 in number?I predict True.");
console.log(3 in number);//True(checks for index existence)
//Test14:Not in array(fales)
console.log("Is 5 not in numbers?I predict True.");
console.log("5 not in number");// True(negation of "in" operator)
