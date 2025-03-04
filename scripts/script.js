const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.createElement('div'); // Create overlay dynamically
overlay.classList.add('overlay');
document.body.appendChild(overlay); // Append overlay to body

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
    hamburger.classList.toggle('active'); 
    overlay.classList.toggle('active'); // Show/hide overlay
});

// Close menu when clicking on overlay
overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
});
