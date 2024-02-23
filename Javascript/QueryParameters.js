// Example URL with query parameters
const urlString = "https://example.com/page?name=John&age=30";

// Create a URL object from the URL string
const url = new URL(urlString);

// Get the search params from the URL
const params = url.searchParams;

// Access individual query parameters
const name = params.get("name");
const age = params.get("age");

// Log the values of the query parameters
console.log("Name:", name); // Output: John
console.log("Age:", age); // Output: 30
