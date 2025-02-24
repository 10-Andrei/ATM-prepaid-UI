// function changeTitle(newTitle) {
//     document.title = newTitle;
// }

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-menu li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'active' from all links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Add 'active' to the clicked link
            this.classList.add("active");
        });
    });
});
