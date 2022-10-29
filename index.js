//player 01 code

var randnum1 = Math.floor(Math.random() * 6) + 1;  //random number from 1 to 6

var randomimg1 = "Images/dice" + randnum1 + ".png";  //giving random number to the respective dice

var imag1=document.querySelectorAll("img")[0]; //player1
imag1.setAttribute("src",randomimg1);

//player 02 code

var randnum2 = Math.floor(Math.random() * 6) + 1;  //random number from 1 to 6
var randomimg2 = "Images/dice" + randnum2 + ".png";  //giving random number to the respective dice


var imag2=document.querySelectorAll("img")[1]; //player2
imag2.setAttribute("src",randomimg2);

//player 03 code

var randnum3 = Math.floor(Math.random() * 6) + 1;  //random number from 1 to 6
var randomimg3 = "Images/dice" + randnum3 + ".png";

var imag3=document.querySelectorAll("img")[2]; //player3
imag3.setAttribute("src",randomimg3);

//main logic - deciding which player wins

if(randnum1 > randnum2)
{
	if(randnum1 > randnum3)
	{
		document.querySelector("h1").innerHTML = "Player 1 wins";

	}
}
else if(randnum2 > randnum3)
{
	document.querySelector("h1").innerHTML = "Player 2 wins";
}
else
{
	document.querySelector("h1").innerHTML = "Player 3 wins";
}

if(randnum1 === randnum2 || randnum2 === randnum3 || randnum3 === randnum1)
{
	document.querySelector("h1").innerHTML = "two among three Players have been tie";

}
