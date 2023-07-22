// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
function lookUpProfile(name, prop) {
 let ans;
 var check=0;
 for(let i=0;i<contacts.length;i++)
 {
     
   if(contacts[i].firstName==name)
   {//console.log(contacts[i].firstName);
     if(contacts[i].hasOwnProperty(prop))
   {//console.log(contacts[i].hasOwnProperty(prop));
       check=1;
       let a=contacts[i][prop];
      ans= a;
   }
   else{
check=1
       ans= "No such property"
   }
}
 
 }
 if(check==0)
 {
  ans="No such contact"
 }
 return ans;
 }
 
 let a=lookUpProfile("Kristian", "la1stName");
 console.log(a);