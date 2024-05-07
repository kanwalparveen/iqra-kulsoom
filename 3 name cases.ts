// lower case
let personName: string="kanwal"
console.log("lower case:",personName. toLowerCase());
// upper case
console.log("upper case:", personName.toLocaleUpperCase());
//Tittle case
console.log("Tittle case:", personName. replace(/\bw/g,c=>c.toLocaleUpperCase()));
