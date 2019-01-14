/*
To run

node -e 'require("./attempt_2").isPalindrome("INSERT STRING HERE")'

*/

module.exports.isPalindrome = function (string) {
	console.log(`You are checking to see if "${string}" is a palindrome without using string manipulation. Aren't you a fancy pants developer!.`);

	const caseComparison = {
    	A:'a',
        B:'b',
        C:'c',
        D:'d',
        E:'e',
        F:'f',
        G:'g',
        H:'h',
        I:'i',
        J:'j',
        K:'k',
        L:'l',
        M:'m',
        N:'n',
        O:'o',
        P:'p',
        Q:'q',
        R:'r',
        S:'s',
        T:'t',
        U:'u',
        V:'v',
        W:'w',
        X:'x',
        Y:'y',
        Z:'z',
	}


	const stringArray = Array.from(string);

	// remove the spaces and commas
	let filteredArray = stringArray.filter((e) => {
		return e !== " " && e !== ",";
	});

	// convert to lowecase
	filteredArray = filteredArray.map((e) => {
		if (typeof caseComparison[e] === 'string') {
			console.log(typeof caseComparison[e])
			return e = caseComparison[e];
		}
		return e;
	})

	// check string is the same in reverse
	if (filteredArray.join('') !== filteredArray.reverse().join('')) {
		return console.log("Get outta here! Do you even know what a palindrome is?");
	}

	console.log("You know it is!");

};