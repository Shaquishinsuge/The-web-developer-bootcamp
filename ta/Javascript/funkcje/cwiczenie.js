//function isEven(x) {
// 	if(x % 2 === 0){
//  	return true;
// }
// 	else {
// 	return false;
// 	}
// }
function isEven(num) {
	return num % 2 === 0;
}

function factorial(num) {
	var result = 1;
	for(var i = 2; i <= num; i++){
		result = result * i;
	}
	return result;
}

// function factorial(num) {
// 	if(num === 0){
// 		return 1;
// 	}
// 	var result = num;
// 	for(var i = num-1; i >= 1; i--){
// 		result = result * i;
// 	}
// 	return result;
// }

function KebabToSnake(str) {

	var newStr = str.replace(/-/g , "_");
	return newStr;

}