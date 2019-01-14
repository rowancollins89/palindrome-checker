/*
To run

node -e 'require("./attempt_1").isPalindrome("INSERT STRING HERE")'

*/

module.exports.isPalindrome = function (string) {
	console.log(`You are checking to see if "${string}" is a palindrome.`);

	const concatString = string.replace(/,/g, '').replace(/ /g, '');
	const stringLength = concatString.length;

	const firstHalf = concatString.substring(0, stringLength / 2);
	let secondHalf = concatString.substring(stringLength / 2);
	
	if (firstHalf.length !== secondHalf.length) {
		secondHalf = secondHalf.substring(1)
	}

	const secondHalfReversed = secondHalf.split('').reverse().join('');	


	if (firstHalf !== secondHalfReversed) {
		return console.log("Get outta here! Do you even know what a palindrome is?");
	}

	console.log("You know it is!");

};