function clicked(){
    document.getElementById("heading").innerHTML="hold ANY key";
}
function down(){
    document.getElementById("number").innerHTML="release"
}
function up(){
    document.getElementById("number").innerHTML="great...!!"
}

let $ = heading;
console.log($)

var x = 10;  
x += 5; //x = x + 5
console.log(x);

var w = "wasi"
var h = "hasan"
var wh = w + " " + h;
console.log(wh);

if(wh == "wasi hasan"){
    console.log("yes")
}else{
    console.log("no")
}

var x = 5;
x++;
console.log(x);

var x = 5;
var y = 3;
console.log(x ** y); //same result as in math.pow(x,y)

var x = 16 + 4 + "hello";    //javascript evaluates results 
console.log(x);              //from left to right.  
var x = "hello" + 16 + 4;    //Different sequence can produce
console.log(x);              //different results//

var x = 123e-2; //dot before last 2 digit
var y = 123e5;   //5 zero after number ends
console.log(x, y)  // extra large or small numbers written
//with scientific (exponential) notation

var person = {
    firstName:"adil", age:18    //objects: written as name:values
}                          // seperated by commas within curly brackets{}
console.log(person.firstName + " is " + person.age + " years old");

var w = "hello";
var x = 54;
var y = undefined;
var z = new String("hello")
console.log(typeof w, typeof x, typeof y, typeof z)  //tells the type of a variable or expression
console.log(w==z, w===z)  //comparision of two js objects may return false

function calculate(p1, p2){
    return p1 * p2
}
console.log(calculate(8, 3));

var person = {
    firstName:"wasi",lastName:"hasan", age:18, fullName:function(){
        return this.firstName + " " + this.lastName;
    }    
} 
console.log(person.fullName());

let text = "hey\tAdil is here";
console.log(text, text.length)     //tells the length of string
console.log(text.slice(4, 8))      //slices out the writen string number(starts position from 0)
console.log(text.slice(-12,-8))    //also accept negative values
console.log(text.slice(4))         //if write only one number it will slice rest of the string

console.log(text.substring(4, 8))  //same as slice but dont accept negative values

console.log(text.replace("Adil", "wasi"))  //replace one word with other
console.log(text.replace(/ADIL/i, "wasi")) //as js is case sensitive use /i in this case and words should be in / instead of ""or''
let text_2 = "what is the meaning of what";
console.log(text_2.replace("what", "hey"))  //if two words are same it replace only first word
console.log(text_2.replace(/what/g, "hey"))  //as one words replace if u want all use /g in this case use / instead of ""or''

console.log(text.toUpperCase())    //for making it upper case
console.log(text.toLowerCase())    //for making it case case

var a = "wasi";
var b = "hasan";
console.log(a.concat(" ", b))  //uses to join two strings
console.log(a + " " + b)   //you can use also concat instead of + operator both works same

var a = "    wasi    " 
console.log(a);
console.log(a.trim())   //removing the whitespaces from start adn end of an string

var a = "2";
console.log(a.padStart(3, "R"))   //pads a string with other string first is number and second the string you want to add
var a = 2;
b = a.toString()
console.log(b.padStart(3, "R"))    //to pad a number convert string too number first
// padEnd works the opposite of it
var a = "2"
console.log(a.padEnd(4, "0"))
var a = 2;
b = a.toString()
console.log(b.padEnd(4, "0"))

var a = "wasi hasan";
console.log(a.charAt(5))   //returns the character of the specified index(position)
console.log(a.charCodeAt(5))  //returns the unicode (UTF - 16) of the specified index(position)
console.log(a[0])    //same as charAt but here, if specifies index is out of range its shows undefined but in charAt it shows empty

var a = "hello, adil";
b = a.split(",")    //splitted by commas(","), also can be with spaces(" ") and pipe("|")
console.log(b[0])  //convert string to an array  

var a = "hey what is the meaning of what";
console.log(a.indexOf("what")) //tells position of a specified string
console.log(a.lastIndexOf("what"))  //tells last occurance position of a specified string
//both wil return -1 if the text is not found
console.log(a.search("what"))  //same as indexOf but has some diff

console.log(a.match(/what/g))  //search string for a  match against a regular expressions and return the match as an array object
//if global search is not used it will return only first match of the string only

console.log(a.includes("what"))   //returns true if  string contains a specified value
console.log(a.includes("what", 4))  //also can use number to check whether this word is at thhat position or not

console.log(a.startsWith("hey"))   //return true if a string is started with the sprecified value either false
console.log(a.startsWith("what", 4))  // use number to check whether if a given string is at specified position or either false
//opposite of startWith
console.log(a.endsWith("what"))   
console.log(a.endsWith("is", 11))  //check if the 11 first character of a string ends with "is"

var a = 
`hello 
how 
are
you`;    //template literals uses back ticks(``) instead of quotes("") to define a stirng
console.log(a) 
//you can use both single and double quotes in template literals
//you can use multiline strings 
var a = "wasi";
var b = "hasan"
console.log(`hello ${a} ${b}`)   //allow variables in strings ,this method is called interpolaton
var a = 12;
var b = 5;
console.log(`${a * b}`)   //aslo allow expressions in strings 

var x = "20";
var y = "10";
console.log( x - y );
console.log( x / y );
console.log( x * y );
console.log( x + y );   //javascript will try to convert all strings to numbers in all numeratic operators except the + operator because js will use this operator as concatenate the strings

var x = 100 / "apple"; 
console.log(x)   //trying a arithemetic with a non-numeric string will result in  NaN(not a number)
console.log(isNaN(x));  //use global js function isNaN() to check whether a valuer is a not a number
var x = 2;
var y = 0;
console.log(x / y)  ////infinity is the value js will return  if u calculate a number outside the largest poosible number
//division by 0 also generates infinity
console.log(typeof NaN, typeof Infinity)
//nan and infinity is a number type of nan or infinity return in number

var x = 0x27;
console.log(x)  //js interprets numeric constants as hexadecimal if they are preceeded by 0x
var x = 053;
console.log(x)   // some js versions interprets number as octal if they are preceeded by 0
// hexatrigesimal = base 36, duotrigesimal = 32, hexadecimal = 16, duodecimal = 12, decimal = 10, octal = 8, binary 2

console.log(Number("10"))  // number method used to  convert variables to numebers

const game = ["pubg", "coc", "freefire"];
console.log(game[1])
game[2] = "clasmini";  //for replacing an array element
console.log(game)
console.log(game.length)  //length tells the length of an array,its always one more then the highest array index
console.log(game[7]="piano tiles");
console.log(game[6])   //adding element with high indexes can lead to undefined holes in an array !
//difference between arrays and object is that it use numbered indexes and name indexes respectively 
console.log(game.toString());  //to change array into strings
console.log(game.join(" * "));  //same as toString but in addition you can specify the editor
console.log(game)
console.log(game.pop())
console.log(game)   //pop will remove the last element of an array
console.log(game.push("clashquest"));
console.log(game)   //push will add new element to array at last
console.log(game.shift())
console.log(game)    //shift will remove the first element of an array
console.log(game.unshift("temple run"))
console.log(game)    //unshift will ad  new elemnt to array  at starting
console.log(game[0]="godilla")
console.log(game)  //for changing the elements of an array
console.log(delete game[7])
console.log(game)   //for deleting an element from an array

const food = ["burger", "pizza"];
console.log(game.concat(food));  //for merging(concatenating) existing arraya it doesn't change the existing array it creates the new array
console.log(game.concat("forntine"))  //for merging an array with values
console.log(game);
console.log(game.splice(0, 1, "hey"))   //add new items in an array with deleted items, first parameter defines the position where new element should be added and second parameter defines how much element should be removed
console.log(game);
console.log(game.slice(0, 3));  //slices out the element from an array first parameter defines delete before elements and second parameter define delete the after elements and rest between elemnts displayed
console.log(game);

console.log(game.sort())   //sort will arrange the array in alphabetically order
console.log(game.reverse())  // it will reveres the element in an array

console.log(new Date());   //for create new date object
console.log(new Date(2022, 4, 5, 12, 19, 40, 70));   //year, month(from 0 - 11 i.e. 0 is jan and 11 is feb), day, hour, ,minute, second, millisecond
console.log(new Date().toString());  //to convert object into string
console.log(new Date().toDateString());  //for making it comfortable to read
console.log(new Date().getTime());  //return number of millisecond since jan 1 , 1970
console.log(new Date().getFullYear());  //return year
console.log(new Date().getMonth());  //return month
console.log(new Date().getDate());  //return date
console.log(new Date().getHours()); //return hour
console.log(new Date().getMinutes()); //return minutes
console.log(new Date().getSeconds());  //return second
console.log(new Date().getMilliseconds()); //return millisecond
console.log(new Date().getDay()); //return day (0 - 6, 0 = sun ... 6 = saturday)
//UTC date methds (universal time zone dates)

console.log(Math.PI)  //returns PI value
console.log(Math.E)  //returns Eulers numebr
console.log(Math.SQRT2)  //returns sqr root of 2
console.log(Math.SQRT1_2)  //return sqr root of 1/2
console.log(Math.LN2)  //natural logarithm of 2
console.log(Math.LN10)  //natural logarithm of 10
console.log(Math.LOG2E)  //base 2 logarithm of 2
console.log(Math.LOG10E)  // base 10 lograithm of 10
console.log(Math.round(3.8))  //nearest integer
console.log(Math.ceil(2.4))  //nearest upto nearest integer
console.log(Math.floor(2.7))  //nearest down nearest ineteger
console.log(Math.trunc(7.1))  //integer part only
console.log(Math.sign(8)) //retuns 1 if pos, -1 if neg, 0 if zero
console.log(Math.pow(2,6))  //returns power 1st perimeter is base and 2nd perometer is base (not sure about parameter :( )
console.log(Math.sqrt(6))  //returns square root
console.log(Math.abs(-54))  //returns positive value of x
console.log(Math.sin(2.5))  //return sine of x //same cos
console.log(Math.max(7, 5, 10))  //returns highest value in set of numebrs
console.log(Math.min(7, 5, 10))  //returns lowest value in set of numebrs
console.log(Math.random()) //return a randome number between 0 and 1
console.log(Math.log(5))  //return naturl logarithm of x  //how many times we must multply Mth.E to get x 
console.log(Math.log2(16))  //return base2 logarithm of x //how mant times we must multiply 2 to get 6
console.log(Math.log10(100))   //return base10 logarithm of x  //how many times we must multiply 10 to get 100

//math.random use dwith math.floor can be used to get random integers
console.log(Math.floor(Math.random() * 100))  //returns random number between 0 to 99

console.log(10 > 7)  //booleans dATA type that have only two value 

var x = 5;
console.log(x==4) //comparison operators
console.log(x=="5")  //equal to
console.log(x>7)  //greater than
console.log(x<10)  //smaller than
console.log(x<=5)  //smaller than or equal to
console.log(x>=10)  //greater than or equal to
console.log(x!=8)  //npt equal to

console.log(x<6 && x==5)  //logical operator  //and operator
console.log(x!=5 || x==5)  //or operator
console.log(!x==5)  //not equal to

var x = 6
 x = (x==5) ? "yup":"nope"  //terminary operator //variablename = (condition) ? value1 : value2
console.log(x)

var x = 5;
if(x==6){
    console.log("yes")
}else if(x!=6){
    console.log("yup")
}else{
    console.log("no")
}

switch (x=6) {
    case 4:
        console.log("no")
        break;
    case 6:
        console.log("yes")
        break;
    default:
        console.log("invalid")
        break;
}

var x = ["barb", "arch","gob","giant","wiz","hog"];
for (let i = 0; i < x.length; i++) {
    console.log(x[i])
}

var x = ["barb", "arch","gob","giant","wiz","hog"];
var i = 0;
while (i < x.length) {
    console.log(x[i])
    i++;
}

var x = ["barb", "arch","gob","giant","wiz","hog"];
var i = 0;
do {
    console.log(x[i]);
    i++
} while (i < x.length);

var x = 10;
for ( i = 1; i <= x; i++) {
    console.log(i);
    if (i==5) {
        // break;
        continue;
    }
}

function myFunction(a, b){
    return a * b;
}
console.log( myFunction(5, 5)) //function

myFunction = (a, b) => a * b;
console.log( myFunction(5, 5))  //arrow function