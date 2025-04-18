document.addEventListener('DOMContentLoaded', () => {
    // Create and add the mobile navbar toggle button
    const menuToggle = document.createElement('button');
    menuToggle.id = 'menuToggle';
    menuToggle.textContent = '☰'; // Hamburger icon
    menuToggle.style.position = 'fixed';
    menuToggle.style.top = '10px';
    menuToggle.style.left = '10px';
    menuToggle.style.backgroundColor = '#004aad';
    menuToggle.style.color = '#fff';
    menuToggle.style.border = 'none';
    menuToggle.style.padding = '10px 15px';
    menuToggle.style.fontSize = '1.5rem';
    menuToggle.style.cursor = 'pointer';
    menuToggle.style.borderRadius = '5px';
    menuToggle.style.zIndex = '1100';
    menuToggle.style.display = 'none'; // Hidden by default for desktop

    document.body.appendChild(menuToggle);

    // Add event listener to toggle the navbar visibility
    const navbar = document.querySelector('.navbar');
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('show'); // Toggle the "show" class to display/hide the navbar
    });

    // Show the toggle button only on mobile devices
    const updateMenuToggleVisibility = () => {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
        } else {
            menuToggle.style.display = 'none';
            navbar.classList.remove('show'); // Ensure the navbar is hidden when resizing back to desktop
        }
    };

    window.addEventListener('resize', updateMenuToggleVisibility);
    updateMenuToggleVisibility(); // Initial check

    // Create and add the night mode toggle button
    const nightModeToggle = document.createElement('button');
    nightModeToggle.id = 'nightModeToggle';
    nightModeToggle.textContent = '🌙 Night Mode';
    nightModeToggle.style.position = 'fixed';
    nightModeToggle.style.bottom = '20px';
    nightModeToggle.style.right = '20px';
    nightModeToggle.style.backgroundColor = '#333';
    nightModeToggle.style.color = '#fff';
    nightModeToggle.style.border = 'none';
    nightModeToggle.style.padding = '10px 20px';
    nightModeToggle.style.fontSize = '1rem';
    nightModeToggle.style.cursor = 'pointer';
    nightModeToggle.style.borderRadius = '5px';
    nightModeToggle.style.zIndex = '1100';

    document.body.appendChild(nightModeToggle);

    // Add event listener to toggle night mode
    nightModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
    });
});v