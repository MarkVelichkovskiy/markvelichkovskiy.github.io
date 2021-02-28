const navBarButtonIcon = document.querySelector(".drop-down-button-icon");
navBarButtonIcon.addEventListener("touchstart", function() {
    event.preventDefault();
    navBarButtonIcon.classList.toggle("drop-down-button-icon--active");
    if (document.querySelector(".vertical-item--active")) {
        document.querySelector(".vertical-item--active").classList.toggle("vertical-item--active");
    }
    document.querySelector(".header-menu-vertical-nav-bar").classList.toggle("header-menu-vertical-nav-bar--active");
}, false);

const verticalNavBar = document.querySelector(".header-menu-vertical-nav-bar");
verticalNavBar.addEventListener("touchstart", function (event) {
    event.preventDefault();
    if (event.target.className === "vertical-item") {
        if (document.querySelector(".vertical-item--active")) {
            document.querySelector(".vertical-item--active").classList.toggle("vertical-item--active");
        }
        event.target.classList.toggle("vertical-item--active");
    }
}, false);

const downloadButton = document.querySelector(".download-button");
downloadButton.addEventListener("touchstart", function () {
    event.preventDefault();
    downloadButton.classList.toggle("download-button--active");
},false);

const headerLogo = document.querySelector(".header-menu-logo");
headerLogo.addEventListener("touchstart", function (event) {
    event.preventDefault();
    if (event.target.className.includes("logo-img") || event.target.className.includes("logo-text")) {
        document.querySelector(".logo-img").classList.toggle("logo-img--active");
        document.querySelector(".logo-text").classList.toggle("logo-text--active");
    }
},false);

const navBarButton = document.querySelector(".nav-bar-button");
navBarButton.addEventListener("touchstart", function () {
    event.preventDefault();
    navBarButton.classList.toggle("nav-bar-button--active")
},false);

const headerMenuNavBar = document.querySelector(".header-menu-nav-bar");
headerMenuNavBar.addEventListener("touchstart", function (event) {
    event.preventDefault();
    if (event.target.className === "nav-bar-item") {
        if (document.querySelector(".nav-bar-item--active")) {
            document.querySelector(".nav-bar-item--active").classList.toggle("nav-bar-item--active");
        }
        event.target.classList.toggle("nav-bar-item--active");
    }
},false);

const pricingButton = document.querySelector(".pricing-item-container");
pricingButton.addEventListener("touchstart", function (event) {
    event.preventDefault();
    if (event.target.className === "pricing-item-button") {
        if (document.querySelector(".pricing-item-button--active")) {
            document.querySelector(".pricing-item-button--active").classList.toggle("pricing-item-button--active");
        }
        event.target.classList.toggle("pricing-item-button--active");
    }
},false);