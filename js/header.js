const burgerButton = document.querySelector("#burger");
const menuMobile = document.querySelector(".menu-mobile");
const closeMenuButton = document.querySelector("#close-menu");

function menuHandler(action) {
	if (action === "open") {
		menuMobile.classList.add("open");
		document.body.classList.add("lock");
	} else if (action === "close") {
		menuMobile.classList.remove("open");
		document.body.classList.remove("lock");
	}
}

burgerButton.addEventListener("click", () => {
	menuHandler("open");
});

closeMenuButton.addEventListener("click", () => {
	menuHandler("close");
});

menuMobile.addEventListener("click", (e) => {
	const clickedLink = e.target.closest(".nav a");
	menuHandler("close");
});