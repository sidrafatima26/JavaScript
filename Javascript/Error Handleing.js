try {
    // Code that may throw an error
    let result = 10 / 0; // This will throw a division by zero error
    console.log(result); // This line will not execute
} catch (error) {
    // Code to handle the error
    console.error('An error occurred:', error.message); // Output the error message
} finally {
    // Code that will execute regardless of whether an error occurred
    console.log('Cleanup code here'); // This line will execute even if there was an error
}

fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Code to handle successful response
        console.log('Data received:', data);
    })
    .catch(error => {
        // Code to handle errors
        console.error('Fetch error:', error.message);
    });
