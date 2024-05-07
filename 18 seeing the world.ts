//store the location in a array.make sure the array is not in alphabetical order.
//print your array in its original order.
let places:string[]=['hyderbad','faisalbad','cape town','ahsanabad'];
console.log('original:'+ places);
// print your array in alphabetical order without nodifying the actual list.
console.log('copy'+[...places].sort());
//show that your array is still in its original order by printing it.
console.log('original:'+ places);
//print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy'+[...places].sort().reverse());
//show that your array is still in its original order by printing it again.
console.log('copy'+[...places].sort().reverse());
//Reverse the orderof your list.print the array to show that it order has change.
console.log('original:'+places.sort());
//reverse the order of your list again.print the list to show it back to it original order.
console.log('original:'+places.sort().reverse());