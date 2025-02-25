function changeTitle(newTitle) {
    document.title = newTitle;
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, div[id]");
    const navLinks = document.querySelectorAll(".nav-menu li a");
    const homeLink = document.querySelector(".nav-menu .home-hover");
    let manualClick = false;

    window.scrollTo(0, 0);
    localStorage.removeItem("activeNav");

    // Home link stays black
    homeLink.classList.add("home-active");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            manualClick = true; // Set flag to ignore observer temporarily

            // Remove active from all links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Add active class except for Home
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
            if (manualClick) return; // Skip observer logic if manually clicked

            let isHomeVisible = false;

            entries.forEach(entry => {
                const id = entry.target.getAttribute("id");
                if (entry.isIntersecting) {
                    if (id) {
                        const link = document.querySelector(`.nav-menu a[href="#${id}"]`);
                        if (link && !link.classList.contains("home-hover")) {
                            changeTitle(link.innerText + " | ATM Prepaid");

                            // Remove active from all links
                            navLinks.forEach(nav => nav.classList.remove("active"));
                            link.classList.add("active");
                        }
                    }

                    if (id === "home") {
                        isHomeVisible = true;
                    }
                }
            });

            // Remove active class from all links if Home is visible or scrolled to top
            if (isHomeVisible || window.scrollY === 0) {
                navLinks.forEach(nav => nav.classList.remove("active"));
            }
        },
        { root: null, threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));

    // Additional check for when user scrolls manually to the top
    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            navLinks.forEach(nav => nav.classList.remove("active"));
        }
    });
});
