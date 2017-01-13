var num,a;

flag = 0;
function openpara(val)
{
    document.getElementById("display").value+=val;
    flag+=1;
}
function closeParagraph(val)
{
    document.getElementById("display").value+=val;
    flag-=1;
}   

function rub(num)
{
    document.getElementById("display").value = num;
}

function displayNumber(num)
{  
    document.getElementById("display").value += num;
}

function solve()
{
     try
    {
        rub(eval(document.getElementById("display").value));
    }
    catch(evaluate)
    {
        rub('Error');
    }
}

function backspace()
{
    var a = document.getElementById("display").value;
    document.getElementById("display").value = a.substr(0, a.length - 1);
}

function squareRoot()
{
    rub(Math.sqrt(eval(document.getElementById("display").value)));
}

function piValue()
{
    document.getElementById("display").value = Math.PI;
}

function sin(form) 
{
    document.getElementById("display").value  = Math.sin(eval(document.getElementById("display").value) );
}

function cos(form) 
{
    document.getElementById("display").value  = Math.cos(eval(document.getElementById("display").value ));
}

function tan(form) 
{
    document.getElementById("display").value  = Math.tan(eval(document.getElementById("display").value ));
}



function checkNumber(str)
 {
	for (var i = 0; i < str.length; i++)
     {
		var ch = str.substring(i, i+1)
		if (ch < "0" || ch > "9")
         {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")") 
                {
				alert("invalid entry!")
				return false;
				}
		}
	}
		return true;
}






















/*

function c(val)
{
calc.area.value=val;
}
function valuee(val)
{
document.getElementById("display").value+=val;
}
*/