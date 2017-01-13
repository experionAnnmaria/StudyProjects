var num,a;

flag = 0;

function openpara(val)
{
    document.getElementById("display").value+=val;
    flag+=1;
}

function closepara(val)
{
    document.getElementById("display").value+=val;
    flag-=1;
}   

function displayNum(num)
{  

    document.getElementById("display").value += num;
}

function rub(num)
{
    document.getElementById("display").value = num;
}

function backspace()
{
    var a = document.getElementById("display").value;
    document.getElementById("display").value = a.substr(0, a.length - 1);
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



/*
function squareRoot(num)
{
    document.getElementById("display").value += num;
    rub(Math.sqrt(document.getElementById("display").value));
}

function piValue()
{
    document.getElementById("display").value = Math.PI;
}



function sin(form) 
{
	document.getElementById("display").value  = Math.sin(document.getElementById("display").value );
}

function cos(form) 
{
	document.getElementById("display").value  = Math.cos(document.getElementById("display").value );
}

function tan(form) 
{
	document.getElementById("display").value  = Math.tan(document.getElementById("display").value );
}

*/