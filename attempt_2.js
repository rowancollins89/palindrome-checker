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

	const firstHalf = filteredArray.slice(0, filteredArray.length / 2);
	let secondHalf = filteredArray.slice(filteredArray.length / 2);


	if (firstHalf.length !== secondHalf.length) {
		secondHalf = secondHalf.slice(1);
	}

	const secondHalfReversed = secondHalf.reverse()


	if (firstHalf.toString() !== secondHalfReversed.toString()) {
		return console.log("Get outta here! Do you even know what a palindrome is?");
	}

	console.log("You know it is!");

};