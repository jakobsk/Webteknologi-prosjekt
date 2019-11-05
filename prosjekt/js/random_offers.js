
var offers = [{name:"tennis1", price:"500", offer:"30%", picture: "../img/tennis1.jpg", id : 1}, {name:"tennis2", price:"500", offer:"30%", picture: "../img/tennis2.jpg", id : 2},
{name:"run1", price:"500", offer:"30%", picture: "../img/run1.jpg", id : 3}, {name:"run2", price:"500", offer:"30%", picture: "../img/run2.jpg", id : 4},
{name:"tennis3", price:"500", offer:"30%", picture: "../img/tennis3.jpg", id : 5}, {name:"tennis4", price:"500", offer:"30%", picture: "../img/tennis4.jpg", id : 6},
{name:"tennis5", price:"500", offer:"30%", picture: "../img/tennis5.jpg", id : 7},{name:"fotball1", price:"500", offer:"30%", picture: "../img/fotballsko1.jpg", id : 8},
{name:"fotball2", price:"500", offer:"30%", picture: "../img/fotballsko2.jpg", id : 9}, {name:"fotball4", price:"500", offer:"30%", picture: "../img/fotballsko4.jpg", id : 10}]
var taken = [];

function random(){

	for (var x = 0; x < 999; x++) {
		var i =  Math.floor(Math.random() * offers.length);
		if(taken.includes(i) === false){
			break;
		}
	}
	
	taken.push(i);
	document.getElementById("r1").src= offers[i].picture;
	document.getElementById("1").id = offers[i].id;
	document.getElementById("r2").innerHTML= offers[i].name;
	document.getElementById("r3").innerHTML= offers[i].offer;


	for (var x = 0; x < 990; x++) {
		var i =  Math.floor(Math.random() * offers.length);
		if(taken.includes(i) === false){
			break;
		}
	}
	taken.push(i);
	document.getElementById("r4").src= offers[i].picture;
	document.getElementById("r5").innerHTML= offers[i].name;
	document.getElementById("2").id = offers[i].id;
	document.getElementById("r6").innerHTML= offers[i].offer;

	for (var x = 0; x < 990; x++) {
		var i =  Math.floor(Math.random() * offers.length);
		if(taken.includes(i) === false){
			break;
		}
	}
	taken.push(i);
	document.getElementById("r7").src= offers[i].picture;
	document.getElementById("3").id = offers[i].id;
	document.getElementById("r8").innerHTML= offers[i].name;
	document.getElementById("r9").innerHTML= offers[i].offer;
}

