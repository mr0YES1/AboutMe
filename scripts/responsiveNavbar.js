function HeaderResponse() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navigation") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navigation"
    }
}