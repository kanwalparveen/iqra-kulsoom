let guest_list:string[]=['yasir','shakir','nasir','babar'];
let not_person:string='nasir';
let new_guest:string='yasir';
guest_list[1]=new_guest;
guest_list.unshift('Abdullah','Abdul Rehman','Abdul Khaliq');
guest_list.splice(0,2)
//console.log('\n unfortunately we can not arrange big table,only two people allow');
//while(guest_list.length>2){
let remove_guest=guest_list.pop();
//console.log(`sorry sir/madam.${remove_guest}you are not invited for dinner`);
//}
for(let i=0; i<guest_list.length;i++){
    console.log('Respected sir/madam'+ 'yes you are still invited on tomorrow dinner\n thank you\n')
}
guest_list.splice(0,2)
console.log(guest_list)
//question 19
//print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of guest Are:${guest_list.length}`);