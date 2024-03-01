/*
We first check if the localStorage object is supported by the browser by checking if typeof(Storage) is not "undefined".
We then use localStorage.setItem(key, value) to store data in the localStorage. The key-value pairs are stored as strings.
We retrieve data from localStorage using localStorage.getItem(key).
We update existing data in localStorage by setting it with a new value.
We remove data from localStorage using localStorage.removeItem(key).
*/

// Check if localStorage is supported by the browser
if (typeof(Storage) !== "undefined") {
  // localStorage is supported

  // Store data in localStorage
  localStorage.setItem("username", "John");

  // Retrieve data from localStorage
  const username = localStorage.getItem("username");
  console.log("Username:", username); // Output: "John"

  // Update data in localStorage
  localStorage.setItem("username", "Jane");

  // Retrieve and log updated data from localStorage
  const updatedUsername = localStorage.getItem("username");
  console.log("Updated Username:", updatedUsername); // Output: "Jane"

  // Remove data from localStorage
  localStorage.removeItem("username");

  // Check if the data has been removed
  const removedUsername = localStorage.getItem("username");
  console.log("Removed Username:", removedUsername); // Output: null
} else {
  // localStorage is not supported by the browser
  console.error("LocalStorage is not supported by this browser.");
}
