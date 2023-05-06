const breadcrumb = document.getElementById("breadcrumb__menu");
let breadChecker = true;
breadcrumb?.addEventListener("click", () => {
    if (breadChecker) {
        document.getElementById("bread__menus").classList.add("d-flex");
        document.getElementById("bread__menus").classList.remove("d-none");
        breadChecker = false;
    } else {
        document.getElementById("bread__menus").classList.add("d-none");
        document.getElementById("bread__menus").classList.remove("d-flex");
        breadChecker = true;
    }
});








