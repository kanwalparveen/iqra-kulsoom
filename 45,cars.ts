import  { features }  from "process";
   
function storeCarInfo(manufactures :string,modelName: string, ...extraOption:{[key:string]: any}[]):Object {
    const CarInfo = {
        manufactures,
        modelName,
        ... Object .assign({}, ... extraOption) 
        }
        return CarInfo;
    } ;
     let answer= storeCarInfo ('Honda','civic',{color:'black'}, {features : ['navigation','power window']})
console.log (answer);