function telephoneCheck(str) {
//	//encompass all
	var regex1 = (/1 ? ? ( ?\d{ 3}[- ]*)| ( ?\d{ 3 } [- ] *) \d{ 3 } [- ] *\d{ 4 } /g);
//	//555-555-5555
	var regex2 = (/^\d{3}-\d{3}-\d{4}$/g);
//	////1-555-555-5555 or 1 555-555-5555 or 555-555-5555
	var regex3 = /^1?[- ]*\d{3}-\d{3}-\d{4}$/g;
	//555 555 5555 or 5555555555
	var regex4 = /^\d{3}[ ]*\d{3}[ ]*\d{4}$/g;
	//(555)555-5555 or (555) 555-5555
	var regex5 = /^\(\d{3}\)[ ]*\d{3}-\d{4}$/g;
	//1 (555) 555-5555
	var regex6 = /^1[- ]*\(\d{3}\)[ ]*\d{3}-\d{4}$/g;
	//1 555 555 5555
	var regex7 = /^1[- ]*\d{3}[ -]*\d{3}[ -]*\d{4}$/g;
	
	if (str.match(regex1)) {
		return true;
	}
	else if (str.match(regex2)) {
		return true;
	}
	else if (str.match(regex3)) {
		return true;
	}
	else if (str.match(regex4)) {
		return true;
	}
	else if (str.match(regex5)) {
		return true;
	}
	else if (str.match(regex6)) {
		return true;
	}
	else if (str.match(regex7)) {
		return true;
	}
	else {
		return false;
	}
};

function check_validator() {
	const inputString = document.getElementById('inputString').value;
	const resultElement = document.getElementById('responseText');

	if (telephoneCheck(inputString)) {
		resultElement.textContent = `Yup! "${inputString}" is a valid number format!`;
	} else {
		resultElement.textContent = `Sorry, "${inputString}" is not a valid phone number format.`;
	}
	openModal();
}
function openModal() {
	document.getElementById('responseModal').style.display = 'block';
}
function closeModal() {
	document.getElementById('responseModal').style.display = 'none';
}

 let result1 = telephoneCheck("1 555-555-5555") 
		 console.log(result1)
 let result2 = telephoneCheck("1 (555) 555-5555") 
		// console.log(result2)
 	let result3 = telephoneCheck("5555555555") 
		// console.log(result3)
	let result4 = telephoneCheck("555-555-5555") 
		//console.log(result4)
	let result5 = telephoneCheck("(555)555-5555") 
		//console.log(result5)
 	let result6 = telephoneCheck("123**&!!asdf#") 
		//console.log(result6)
  let result7 = telephoneCheck("(6054756961)") 
		//console.log(result7)
	let result8 = telephoneCheck("1(555)555-5555") 
	 	//console.log(result8)
	let result9 = telephoneCheck("2 (757) 622-7382") 
		//console.log(result9)
  let result10 = telephoneCheck("0 (757) 622-7382") 
		//console.log(result10)
  let result11 = telephoneCheck("-1 (757) 622-7382") 
		//console.log(result11)
	let result12 = telephoneCheck("555)-555-5555") 
		//console.log(result12)
	let result13 = telephoneCheck("555-5555")
		//console.log(result13)
	let result14 = telephoneCheck("5555555") 
		//console.log(result14)
	let result15 = telephoneCheck("1 555)555-5555") 
		//console.log(result15)
	let result16 = telephoneCheck("1 555 555 5555") 
		//console.log(result16)
	let result17 = telephoneCheck("1 456 789 4444") 
		//console.log(result17)