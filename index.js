AOS.init();
const header = document.getElementById("header");
const image = document.getElementById("header__imgage");
window.addEventListener("scroll", handleHeaderWhenScrollTop);
function handleHeaderWhenScrollTop() {
	const scrollFromTop = window.pageYOffset;
	if (scrollFromTop >= 100) {
		header.classList.add("header__animate");
		image.style.display = "none";
	} else {
		header.classList.remove("header__animate");
		image.style.display = "block";
	}
}
