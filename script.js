const hamburger = document.getElementById('hamburger'); // Selects the hamburger menu icon
const navMenu = document.querySelector('.nav-menu'); // Selects the navigation menu
const closeBtn = document.querySelector('.close-btn'); // Selects the close (X) button

hamburger.addEventListener('click', () => { // Adds a click event listener to the hamburger icon
    navMenu.classList.toggle('active'); // Toggles the 'active' class on the navigation menu to show/hide it
});

closeBtn.addEventListener('click', (e) => { // Adds a click event listener to the close button
    e.preventDefault(); // Prevents the default link action (like jumping to the top of the page)
    navMenu.classList.remove('active'); // Removes the 'active' class from the navigation menu to hide it
});
