// loadElements.ts

// -----------------------------------------
// ----------------------------------------- IMPORTS
// -----------------------------------------

// -----------------------------------------
// ----------------------------------------- CONSTANTS & VARIABLES
// -----------------------------------------

const header = document.getElementById("header-placeholder")!;
const footer = document.getElementById("footer-placeholder")!;

// -----------------------------------------
// ----------------------------------------- FUNCTIONS
// -----------------------------------------

function init() {
	loadHeader();
	loadFooter();
}

function loadHeader() {
	fetch("models/header.html")
		.then((response) => response.text())
		.then((data) => {
			header.innerHTML = data;
		})
		.catch((error) => console.error("Error loading the header:", error));
}

function loadFooter() {
	fetch("models/footer.html")
		.then((response) => response.text())
		.then((data) => {
			footer.innerHTML = data;
		})
		.catch((error) => console.error("Error loading the footer:", error));
}

// -----------------------------------------
// ----------------------------------------- SCRIPT
// -----------------------------------------

init();
