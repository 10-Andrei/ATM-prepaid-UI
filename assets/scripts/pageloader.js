function loadPage(sectionId, file, className, callback) {
    let section = document.getElementById(sectionId);

    // ✅ Apply background directly to the section
    section.style.backgroundImage = "url('https://github.com/10-Andrei/ATM-prepaid-UI/blob/public/assets/images/wave/page-wave.svg')";
    section.style.backgroundSize = "contain";
    section.style.backgroundRepeat = "no-repeat";
    section.style.backgroundPosition = "bottom";

    fetch(file)
        .then(response => response.text())
        .then(data => {
            section.innerHTML = data;
            section.classList.add(className);
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



