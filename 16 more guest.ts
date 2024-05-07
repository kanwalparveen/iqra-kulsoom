let guest_list: string[]=['sabir','yasir','zubair','amir'];
let not_person: string= 'sabir';
let new_guest:string= 'yasir';
guest_list[1]=new_guest;
for(let i=0;i< guest_list.length;i++){
    console.log('Respected sir/madam ' +guest_list[i]+',\n we invited you on dinner tomorrow.we found big table so we decide to invite 3 more guest \n')
}
guest_list.unshift('Abdullah','Abdul khaliq','Abdul rehman',);
for(let i=0;i< guest_list.length;i++){
    console.log('Respected sir/madam ' +guest_list[i]+',\n we invited you on dinner tomorrow.we found big table so we decide to invite 3 more guest \n')
}