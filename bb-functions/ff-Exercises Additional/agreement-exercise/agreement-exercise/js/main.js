/*

	Create variables to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/


let receivingName;
let disclosingName;
let date;

recievingName = prompt('Enter receiving party name: ');
disclosingName = prompt('Enter disclosing party name: ');
date = prompt('Enter date: ');

document.querySelector('.parties span.receiving-party').innerHTML = recievingName;
document.querySelector('.signature span.receiving-party').innerHTML = recievingName;

document.querySelector('.parties span.disclosing-party').innerHTML = disclosingName;
document.querySelector('.signature span.disclosing-party').innerHTML = disclosingName;

document.querySelector('.date').innerHTML = date;