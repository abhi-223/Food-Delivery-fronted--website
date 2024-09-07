  // Toggle the navbar for mobile view
  document.getElementById('menu-bar').onclick = function() {
    document.querySelector('.navbar').classList.toggle('active');
}

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form validation
document.querySelector('form').onsubmit = function(e) {
    const name = document.querySelector('input[placeholder="name"]').value;
    const email = document.querySelector('input[placeholder="email"]').value;
    const number = document.querySelector('input[placeholder="number"]').value;
    
    if (!name || !email || !number) {
        alert("Please fill in all required fields.");
        e.preventDefault(); // Stop form submission
    }
}

// Scroll to top functionality
document.getElementById('scroll-top').onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

