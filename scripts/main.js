/*
if (localStorage.getItem("like") == true) {
	document.getElementById("likeButton").setAttribute("src", "assets/heart-red.svg");
}*/

/*
document.getElementById("likeButton").addEventListener('click', event => {
//  localStorage.setItem("like", "true");
  document.getElementById("likeButton").src = "assets/heart-red.png";
});
*/

document.getElementById("searchBox").addEventListener('focus', event => {
	document.getElementById("searchResults").style.visibility = "visible";
});

document.getElementById("closeSearchResults").addEventListener('click', event => {
	document.getElementById("searchResults").style.visibility = "hidden";
});

document.getElementById("burgerMenu").addEventListener('click', event => {
	const tray = document.getElementById("rightTray");
	if (tray.className == "") tray.className = "moveRightTray";
	else if (tray.className == "moveRightTray") tray.className = "";
});

document.getElementById("likeButton").addEventListener('click', event => {
	const button = document.getElementById("likeButton");
	button.style.filter = "drop-shadow(0px 0px 0px red)";
});

