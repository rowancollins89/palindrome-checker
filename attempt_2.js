/*
To run

node -e 'require("./attempt_1").isPalindrome("INSERT STRING HERE")'

*/

module.exports.isPalindrome = function (string) {
	console.log(`You are checking to see if "${string}" is a palindrome without using string manipulation. Aren't you a fancy pants developer!.`);

	const stringArray = string.split('');

	const filteredArray = stringArray.filter((e) => {
		return e !== " " && e !== ",";
	});


	if (filteredArray.join('') !== filteredArray.reverse().join('')) {
		return console.log("Get outta here! Do you even know what a palindrome is?");
	}

	console.log("You know it is!");

};