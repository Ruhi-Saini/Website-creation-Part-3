// Toggle navigation menu on mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Function to validate forms
const validateForm = (form, requiredFields) => {
    let isValid = true;
    requiredFields.forEach((field) => {
        const value = form[field].value.trim();
        if (!value) {
            isValid = false;
            // Display feedback next to the input field
            const errorField = form.querySelector(`.${field}-error`);
            if (errorField) {
                errorField.textContent = `Please enter your ${field.replace('-', ' ')}.`;
            }
        } else {
            const errorField = form.querySelector(`.${field}-error`);
            if (errorField) {
                errorField.textContent = ''; // Clear error message
            }
        }
    });
    return isValid;
};

// Form validation for reservation and feedback
const reservationForm = document.querySelector('.reservation-section form');
const feedbackForm = document.querySelector('.feedback-section form');

reservationForm.addEventListener('submit', (e) => {
    const requiredFields = ['name', 'email', 'date', 'time', 'people'];
    if (!validateForm(reservationForm, requiredFields)) {
        e.preventDefault();
        alert('Please fill out all fields correctly before submitting.');
    }
});

feedbackForm.addEventListener('submit', (e) => {
    const requiredFields = ['name', 'email', 'message'];
    if (!validateForm(feedbackForm, requiredFields)) {
        e.preventDefault();
        alert('Please fill out all fields before submitting.');
    }
});
