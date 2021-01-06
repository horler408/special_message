const container = document.getElementById("container");
// const error = document.querySelector('.error');
//const name = prompt("Please enter your name").toLowerCase();


if(window.confirm("Are you Sekinat Olaitan?")) {
	container.style.display = "block"
}else {
	alert("This message is not meant for you, thank you!")
	container.style.display = "none"
	// error.style.display = "block";
}
