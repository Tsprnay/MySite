if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"ℤ|",
					"ℤ |",
					"ℤ e|",
					"ℤ e |",
					"ℤ e n|",
					"ℤ e n |",
					"ℤ e n e|",
					"ℤ e n e |",
					"ℤ e n e t|",
					"ℤ e n e t |",
					"ℤ e n e t t|",
					"ℤ e n e t t |",	
					"ℤ e n e t t a|",
					"ℤ e n e t t a |",	
					"ℤ e n e t t a n|",
					"ℤ e n e t t a n |",
					"ℤ e n e t t a n y|",
					"ℤ e n e t t a n y |",				];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}