var modalBtn = document.querySelector(".cta-add"),
	modalBg = document.querySelector(".modal-bg"),
	modalClose = document.querySelector(".modal-close");
modalBtn.addEventListener("click", function () {
	modalBg.classList.add("bg-active");
}),
	modalClose.addEventListener("click", function () {
		modalBg.classList.remove("bg-active");
	}),
	$("#booknow")
		.on("click", function () {
			$.getScript("https://fareharbor.com/embeds/api/v1/?autolightframe=yes");
		})
		.done(function () {
			window.location.href =
				"https://fareharbor.com/embeds/book/southtours/items/148437/?full-items=yes&flow=no";
		});
$("#contact").on("click", function () {
	$.getScript("headers.php?file=recaptcha.js");
}),
	(window.onscroll = function () {
		myFunction();
	});
var header = document.getElementById("myHeader"),
	sticky = header.offsetTop;
function myFunction() {
	window.pageYOffset > sticky
		? header.classList.add("sticky")
		: header.classList.remove("sticky");
}
function openTab(e, t) {
	var n, c, a;
	for (
		c = document.getElementsByClassName("tabcontent"), n = 0;
		n < c.length;
		n++
	)
		c[n].style.display = "none";
	for (
		a = document.getElementsByClassName("tablinks"), n = 0;
		n < a.length;
		n++
	)
		a[n].className = a[n].className.replace(" active", "");
	(document.getElementById(t).style.display = "block"),
		(e.currentTarget.className += " active");
}
const hamburger = document.querySelector(".hamburger"),
	navLinks = document.querySelector(".nav-links"),
	links = document.querySelectorAll(".nav-links li");
var mylogo = document.getElementById("myLogo");
hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("open"),
		links.forEach((e) => {
			e.classList.toggle("fade");
		});
}),
	$(document).ready(function () {
		$("#hamburgerID").on("click", function () {});
	}),
	$(".nav-links li a").on("click", function () {
		$("#hamburgerID").click();
	});
