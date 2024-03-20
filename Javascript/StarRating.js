// Get all star elements
const stars = document.querySelectorAll('.star');

// Add click event listener to each star
stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        updateRating(value);
    });
});

// Function to update rating value
function updateRating(value) {
    const ratingValue = document.getElementById('rating-value');
    ratingValue.textContent = value;
    
    // Mark stars up to the selected value as active
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}
