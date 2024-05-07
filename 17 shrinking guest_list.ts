let guest_list: string[] =['yasir', 'ali','arman', 'amir'];
let not_person :string ='yasir';
let new_guest :string ='ali';
guest_list [1]= new_guest;
guest_list.unshift ('hira', 'saba', 'eraj');
console.log('/n unfortunately we can not arrang big table , only two people allow.')
while (guest_list.length>2){
    let remove_guest=guest_list.pop();
console.log(`sorry sir/madam. ${remove_guest}you are not invited for dinner`);
}       
for (let i=0; i<guest_list.length; i++){
    console.log('respected sir/madam'+guest_list[i]+'/n big table so we decide to invite 3 more guest /nThankYou /n')
}
guest_list.splice(0,2)
console.log (guest_list)
