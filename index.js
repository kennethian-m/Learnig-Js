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

 };
   
 //type conversion=  is the change of data type o another(string, number, boolean)

 let age = window.prompt("how old are you?");

 console.log(typeof age);

 age ++;

 console.log(`Happy Birthday you are now ${age} old`);
 

 let x;
 let y;
 let z;


 x=String("12.2");
 y=Number(15);
 z=Boolean('pizza');

 console.log(x, typeof x);
 console.log(y, typeof y);
 console.log(z, typeof z);
 
//const is a variable that can not be changed

const PI = 3.14159

let radious;
let circumference;

radious=window.prompt('enter the radious of the circle');

circumference = 2*PI*radious

console.log(`the circumference is ${circumference} `)
//or
console.log('the circumference is', circumference);

//Math
let x = 3.14;
let y= 5;
let z= 9;
let maxmum;
let minmum;

//x = Math.round(x) roundsoff the number
//x=Math.floor(x); reduces decimal lower
//x = Math.ceil(x); //rounds off to upper
//x = Math.pow(x, 2); //gives power to number
//x = Math.sqrt(x); //gives squar root
//x = Math.abs(x); //gives an absolute value
maxmum = Math.max(x,y,z);
minmum = Math.min(z, x);



console.log(x);
console.log(maxmum);
console.log(minmum);

 //creating a squar root programm
 
 let a;
 let b;
 let c;

 a=window.prompt("input the value of a");
 a=Number(a);
 b=window.prompt("input the value of b")
 b=Number(b);

 c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
 console.log(c);


let a;
 let b;
 let c;

 document.getElementById('submit').onclick = function(){

    a=document.getElementById('aText').value
    a=Number(a);

    b=document.getElementById('bText').value
    b=Number(b);

    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    
    document.getElementById('sideC').innerHTML = 'Side E:' + c;
 };
 
  let count = 0;
 document.getElementById('decrease').onclick = function() {
   count -=1;
   document.getElementById('answer').innerHTML = count;

 };
 document.getElementById('rest').onclick = function() {
   count = 0;
   document.getElementById('answer').innerHTML = count;
 }
 document.getElementById('increase').onclick = function() {
   count +=1;
   document.getElementById('answer').innerHTML = count;

 };

 let x =Math.random();

 console.log(x);
 
let userName = 'makabuli Ian';
let phoneNumber = '070-123-4567';

console.log(userName.length);
console.log(userName.charAt);
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.indexOf('Ian')); 
console.log(userName.lastIndexOf('Ian'));
*/
let time =20;

if(time <12){
    console.log('good morning');
};
if(time >=12 && time <18){
    console.log('good afternoon');
}
else{
    console.log('good evening');
}