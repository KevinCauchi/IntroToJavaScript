'My name is John,' + ' I concatenate.'

const ourStr = "I come first. " + "I come second.";
//The string I come first. I come second. would be displayed in the console

const myStr = "This is the start." + " This is the end.";
//The string This is the start. This is the end. would be displayed in the console

//Concatenating Strings with the Plus Equals Operator

let ourStrs = "I come first. ";
ourStrs += "I come second.";
//ourStrs now has a value of the string I come first. I come second..

let myStrs = "This is the first sentence.";
myStrs +=" This is the second sentence."
//myStrs now has a value of the string This is the first sentence. This is the second sentence.

//Constructing Strings with Variables

const myName = "John Doe";
const mySt = "My name is"+ myName + "and I am well!";

//Appending Variables to Strings
const someAdjective = "Cool";
let myStar = "Learning to code is ";

myStar += someAdjective;
console.log(myStar)
//prints Learning to code is Cool
