function randavg()
{
var num1 = Math.random();
var num2 = Math.random();
var num3 = Math.random();
var num4 = Math.random();
var avg = (num1 + num2 + num3 + num4) / 4;
return avg;
}

document.getElementById('avg').innerHTML += "<br>This text is generated by the file randavg.js! " + randavg();