let guest_list:string[]=['ali','amir','yasir','shakir'];
for( let i =0; i <guest_list.length;i++){
console.log('respected sir/madam ' +guest_list[i]+',\n we invited you on dinner tomorrow.\nThank you\n')
}
let not_person:string='amir';
let new_guest:string='nasir';
guest_list[1]=new_guest;
for(let i=0;i<guest_list.length;i++){
    console.log('respected sir/ ' +guest_list[i]+',\n we invited you on dinner tomorrow.\n Thank you\n')
}
console.log(`Mr. ${not_person} will not coming tomorrow dinner`)
