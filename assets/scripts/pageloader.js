function loadPage(sectionId, file, className, callback) {
    let section = document.getElementById(sectionId);

    // ✅ Apply class BEFORE loading content
    section.classList.add(className);

    fetch(file)
        .then(response => response.text())
        .then(data => {
            section.innerHTML = data;
            if (callback) callback();
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
                        top: target.offsetTop - 70, 
                        behavior: "smooth",
                    });
                }
            }, 200);
        }
    }
}

loadPage("Telco", "telco.html", "telco-section", checkAllPagesLoaded);
loadPage("Transpo", "transpo.html", "transpo-section", checkAllPagesLoaded);
loadPage("Epins", "epins.html", "epins-section", checkAllPagesLoaded);
loadPage("Topup", "topup.html", "topup-section", checkAllPagesLoaded);



