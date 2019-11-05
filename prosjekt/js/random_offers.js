
/*var offers = [
{name:"football_1", price:"500", offer:"30%", picture: "../img/fotballsko1.jpg", id : 1},
{name:"football_2", price:"500", offer:"30%", picture: "../img/fotballsko2.jpg", id : 2},
{name:"football_3", price:"500", offer:"30%", picture: "../img/fotballsko3.webp", id : 3},
{name:"run_1", price:"500", offer:"30%", picture: "../img/run1.jpg", id : 4},
{name:"run_2", price:"500", offer:"30%", picture: "../img/run2.jpg", id : 5},
{name:"run_3", price:"500", offer:"30%", picture: "../img/run3.jpg", id : 6},
{name:"tennis_1", price:"500", offer:"30%", picture: "../img/tennis1.jpg", id : 7},
{name:"tennis_2", price:"500", offer:"30%", picture: "../img/tennis2.jpg", id : 8},
{name:"tennis_3", price:"500", offer:"30%", picture: "../img/tennis3.jpg", id : 9}]*/

var taken = [];
function random(){

	for (var x = 0; x < 999; x++) {
		var i =  Math.floor(Math.random() * database.length);
		if(taken.includes(i) === false){
			break;
		}
	}

	taken.push(i);
	document.getElementById("r1").src= database[i].picture;
	document.getElementById("1").id = database[i].id;
	document.getElementById("r2").innerHTML= database[i].name;
	document.getElementById("r3").innerHTML= '40%';


	for (var x = 0; x < 990; x++) {
		var i =  Math.floor(Math.random() * database.length);
		if(taken.includes(i) === false){
			break;
		}
	}
	taken.push(i);
	document.getElementById("r4").src= database[i].picture;
	document.getElementById("r5").innerHTML= database[i].name;
	document.getElementById("2").id = database[i].id;
	document.getElementById("r6").innerHTML= '40%';

	for (var x = 0; x < 990; x++) {
		var i =  Math.floor(Math.random() * database.length);
		if(taken.includes(i) === false){
			break;
		}
	}
	taken.push(i);
	document.getElementById("r7").src= database[i].picture;
	document.getElementById("3").id = database[i].id;
	document.getElementById("r8").innerHTML= database[i].name;
	document.getElementById("r9").innerHTML= '40%';
}
