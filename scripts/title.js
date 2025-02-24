function changeTitle(newTitle) {
    document.title = newTitle;
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-menu li a");

    // Scroll to the top on page refresh
    window.scrollTo(0, 0);

    // Remove stored active state
    localStorage.removeItem("activeNav");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Remove 'active' from all links
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");

            // Smooth scroll to section
            const sectionId = this.getAttribute("href").substring(1);
            if (sectionId) {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});



