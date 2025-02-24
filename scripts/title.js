function changeTitle(newTitle) {
    document.title = newTitle;
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, div[id]"); // Select sections and divs with IDs
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

    // Create an IntersectionObserver to detect visible sections
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    if (id) {
                        const link = document.querySelector(`.nav-menu a[href="#${id}"]`);
                        if (link) {
                            changeTitle(link.innerText + " | ATM Prepaid");

                            // Highlight the active link
                            navLinks.forEach(nav => nav.classList.remove("active"));
                            link.classList.add("active");
                        }
                    }
                }
            });
        },
        { root: null, threshold: 0.5 } // 50% of the section should be visible
    );

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
});
