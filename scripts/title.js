function changeTitle(newTitle) {
    document.title = newTitle;
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, div[id]");
    const navLinks = document.querySelectorAll(".nav-menu li a");
    const homeLink = document.querySelector(".nav-menu .home-hover"); // Select Home link
    let manualClick = false; // Track manual clicks

    window.scrollTo(0, 0);
    localStorage.removeItem("activeNav");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            manualClick = true; // Set flag to ignore observer temporarily

            // Remove active from all links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Skip adding active class for Home
            if (!this.classList.contains("home-hover")) {
                this.classList.add("active");
            }

            const sectionId = this.getAttribute("href").substring(1);
            if (sectionId) {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }

            // Reset flag after scrolling
            setTimeout(() => { manualClick = false; }, 1000);
        });
    });

    const observer = new IntersectionObserver(
        entries => {
            if (manualClick) return; // Skip observer logic if manually clicked "Home"

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    if (id) {
                        const link = document.querySelector(`.nav-menu a[href="#${id}"]`);
                        if (link && !link.classList.contains("home-hover")) {
                            changeTitle(link.innerText + " | ATM Prepaid");

                            // Remove active from all links
                            navLinks.forEach(nav => nav.classList.remove("active"));
                            link.classList.add("active");
                        }
                    }
                }
            });
        },
        { root: null, threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));
});
