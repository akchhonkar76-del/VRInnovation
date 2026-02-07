document.addEventListener('DOMContentLoaded', () => {
    console.log("VR Innovations Clone Loaded");

    // Simple interaction for the "Let's Collaborate" button
    const collaborateBtn = document.querySelector('.btn-collaborate');
    if(collaborateBtn) {
        collaborateBtn.addEventListener('click', (e) => {
            // If it's on the home page anchor, smooth scroll, otherwise let it navigate
            if(collaborateBtn.getAttribute('href') === '#contact') {
                e.preventDefault();
                alert("Redirecting to Enquiry page...");
                window.location.href = "p/enquiry.html";
            }
        });
    }

    // Add active state to navbar based on current URL
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if(link.getAttribute('href').includes(currentPath.split('/').pop())) {
            link.style.backgroundColor = "rgba(255,255,255,0.6)";
            link.style.fontWeight = "bold";
        }
    });
});