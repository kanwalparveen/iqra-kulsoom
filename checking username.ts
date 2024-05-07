let current_users :string[]=['ali','amir','ayesha','sadia','iqra'];
let new_users :string[]=['arham','alian','atika','noor','esha'];
new_users.forEach (newUsersname=>{
let lowercase:string =newUsersname.toLowerCase ();
if (current_users.map (c_user => c_user.toLowerCase ()).includes (lowercase)){; 
console.log (`The username ${newUsersname} is not available. please write a different username`);
}
else {
console.log (`the username ${newUsersname} is available`);
}});
