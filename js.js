//Writing header

var i = 0;
var txt = "Last dollar luxury!";
var speed = 70;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
};

