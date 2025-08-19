//console.log('hello');// appears only in the console
//window.alert('this is an arlat');

/*document.getElementById('myH1').textContent='Hello';
document.getElementById('myP').textContent='I love pizza';

*/
/*variable = acontainer that stores a value
1. declaration eg let x;
2.assignment   eg x = 100;
 both eg let x= 100

let age = 25;
let price = 1000;
let gpa = 2.1;


//console.log('you are ${age} years old');
//console.log(`the price is ${price} Shs only`);use backticks(``) not single or doublequats
    or

let firstName = "Ian";
let favoritefood = 'pizza'
let email = 'kennethianm@gmail.com';

console.log(typeof firstName);
console.log(`My name is ${firstName}`);
console.log(`i like ${favoritefood}`);

       //     Boolean variable
let online = true;

console.log(`ian is online: ${online}`);

let fullName = "Kenneth Ian";
let age =28;
let isStudent = false;

document.getElementById('p1').textContent = `Your name is ${fullName}`;
document.getElementById('p2').textContent=` I am ${age} years old`;
document.getElementById('p3').textContent=`Enrolled: ${isStudent}`

   // Arithmetic operators = operands(values, variables,etc)
 //  operators(-+*=/)

 let students =31;
//students = students +1;
    or 
//students +=1;
or
 students ++;
 console.log(students);

 operator precedence
 1. parenthesis
 2. exponents
 3.multiplication and division and modulo
 4.addition & subtraction


 // How to accept user input
 1.easy way = window prompt
 2. professional way = HTML textbox
 
easy way 
 let username;
 username = window.prompt('what is your username?');

 console.log(username);

 let username;

 document.getElementById('mySubmit').onclick= function(){
    username=document.getElementById('myText').value;
    document.getElementById('myH1').textContent = `Hello ${username}`;

 };*/
   
 //type conversion=  is the change of data type o another(string, number, boolean)

 let age = window.prompt("how old are you?");

 console.log(typeof age);

 age ++;

 console.log(`Happy Birthday you are now ${age} old`);