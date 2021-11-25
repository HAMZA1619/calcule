const showOperation = document.querySelector('#showOperation');
let result = null;
let operation;
let numbers = [];


function getOperation(op) {
    if (numbers[0]) {
        getResult();
     }
        operation = op;
        if (showOperation.textContent) {
          
             numbers.push(Number(showOperation.textContent)); 
            }
        showOperation.textContent = null;    
}

function getNumber(number) {
    showOperation.textContent += number;   
}


function getResult() {

numbers.push(Number(showOperation.textContent));

if (operation == '+') {
    result = numbers[0] + numbers[1];
}
else if (operation == '-') {
    result = numbers[0] - numbers[1];
}
else if (operation == '*') {
    result = numbers[0] * numbers[1];
}
else if (operation == '/') {
    if ( numbers[1] == 0) {
        alert('You can\'t divide by Zero, the page will be reloaded. Try again after 2000 week.');
        reset() ;
    }else result = numbers[0] / numbers[1];
    
}else result = numbers[0]
operation = null;
numbers = [];

return showOperation.textContent = result;
   
}
function dot() {
	let dotCheck = showOperation.textContent;
	if (!dotCheck.includes('.')) {
		showOperation.textContent += '.';
	}
}
function reset() {
    window.location.reload();
}

function back() {
    if (showOperation.textContent != '') {
		let back = showOperation.textContent;
		showOperation.textContent = back.substring(0, back.length - 1);
	}else{ showOperation.textContent = numbers[0];}
}
