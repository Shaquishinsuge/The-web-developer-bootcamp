var age = Number(prompt("podaj swoj wiek"));

if(age < 0) {
	alert("wiek jest nieprawidlowy");
	console.log("wiek jest nieprawidlowy");
	document.write("wiek jest nieprawidoly");
}

else if(age == 21) {
	alert("happy 21st birthday!!");
	console.log("happy 21st birthday!!");
	document.write("happy 21st birthday!!");
}

else if (age % 2 !== 0) {
	alert("wiek nieparzysty")
	console.log("wiek nieparzysty")
	document.write("wiek nieparzysty");
}

else if (age % Math.sqrt(age) === 0) {
	console.log("your age is a perfect square!");
}