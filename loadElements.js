// loadElements.ts
// -----------------------------------------
// ----------------------------------------- IMPORTS
// -----------------------------------------
// -----------------------------------------
// ----------------------------------------- CONSTANTS & VARIABLES
// -----------------------------------------
var header = document.getElementById("header-placeholder");
var footer = document.getElementById("footer-placeholder");
// -----------------------------------------
// ----------------------------------------- FUNCTIONS
// -----------------------------------------
function init() {
    loadHeader();
    loadFooter();
}
function loadHeader() {
    fetch("models/header.html")
        .then(function (response) { return response.text(); })
        .then(function (data) {
        header.innerHTML = data;
    })["catch"](function (error) { return console.error("Error loading the header:", error); });
}
function loadFooter() {
    fetch("models/footer.html")
        .then(function (response) { return response.text(); })
        .then(function (data) {
        footer.innerHTML = data;
    })["catch"](function (error) { return console.error("Error loading the footer:", error); });
}
// -----------------------------------------
// ----------------------------------------- SCRIPT
// -----------------------------------------
init();
