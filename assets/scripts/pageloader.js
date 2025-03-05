function loadPage(sectionId, file, className, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            let section = document.getElementById(sectionId);
            section.innerHTML = data;
            section.classList.add(className);
            if (callback) callback(); // Call callback after loading
        });
}

// Load all pages and then adjust scrolling
let pagesLoaded = 0;
const totalPages = 4;

function checkAllPagesLoaded() {
    pagesLoaded++;
    if (pagesLoaded === totalPages) {
        if (window.location.hash) {
            setTimeout(() => {
                const target = document.querySelector(window.location.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100, 
                        behavior: "smooth",
                    });
                }
            }, 200); // Small delay ensures correct scrolling
        }
    }
}

loadPage("Telco", "telco.html", "telco-section", checkAllPagesLoaded);
loadPage("Transpo", "transpo.html", "transpo-section", checkAllPagesLoaded);
loadPage("Epins", "epins.html", "epins-section", checkAllPagesLoaded);
loadPage("Topup", "topup.html", "topup-section", checkAllPagesLoaded);
