document.addEventListener('DOMContentLoaded', () => {
    // Form submission
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
});
