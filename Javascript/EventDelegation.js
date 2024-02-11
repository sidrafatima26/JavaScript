// Create a container div element
const container = document.createElement('div');
container.id = 'container';
container.classList.add('container');
document.body.appendChild(container);

// Create four item div elements and append them to the container
for (let i = 1; i <= 4; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.textContent = `Item ${i}`;
    container.appendChild(item);
}

// Add event listener to the parent container
container.addEventListener('click', function(event) {
    // Check if the clicked element is an item
    if (event.target.classList.contains('item')) {
        // Output the text content of the clicked item
        console.log('Clicked:', event.target.textContent);
    }
});
