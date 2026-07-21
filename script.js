	function mobilenavFunc() {
	var x = document.getElementsByClassName("navmobile")[0];
	if (x.style.display === "grid") {
		x.style.display = "none";
		} else {
		x.style.display = "grid";
		}
	}

function hamburgericonFunc() {
  document.querySelector(".barcontainer").classList.toggle("change");
}