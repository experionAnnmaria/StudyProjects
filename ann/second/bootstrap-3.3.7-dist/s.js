flag = 0;
function openpara(val) {
	calc.display.value += val;
	flag += 1;
}
function closepara(valval) {
	calc.display.value += valval;
	flag -= 1;
}
function Resetfunction(calc) {
	calc.display.value =' ';
	flag = 0;
}
function cos_function() {
	flag += 1;
	calc.display.value +='Math.cos(';
}
function sin_function() {
	flag += 1;
	calc.display.value +='Math.sin(';
}
function tan_function() {
	flag += 1;
	calc.display.value +='Math.tan(';
}
function sqrt_function() {
	flag += 1;
	calc.display.value +='Math.sqrt(';
}
function log_function() {
	flag += 1;
	calc.display.value +='Math.log(';
}
function evaluation(calc) {
	n = calc.display.value;
	var size = calc.display.value.length;
	var lastchar = calc.display.value.charAt(size)
	if (isNaN(lastchar) && lastchar !=')' && lastchar !='!'){
		calc.display.value ='syntax error';
	}
	else if (flag != 0) {
		calc.display.value ='error: paranthesis';
	}
	else {
		result = eval(n);
		calc.display.value = result;
	}
}