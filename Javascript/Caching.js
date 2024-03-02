//an object to cache data retrieved from an API. We'll check if the data is already cached before making a new API request.

// Define a cache object
const cache = {};

// Function to fetch data from API with caching
async function fetchDataWithCache(url) {
  // Check if data is already cached
  if (cache[url]) {
    console.log('Data retrieved from cache:', cache[url]);
    return cache[url]; // Return cached data
  }

  // If data is not cached, fetch it from API
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Cache the retrieved data
    cache[url] = data;

    console.log('Data retrieved from API:', data);
    return data; // Return fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error
  }
}

// Example usage
(async () => {
  try {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

    // Fetch data with caching
    const data1 = await fetchDataWithCache(apiUrl);
    const data2 = await fetchDataWithCache(apiUrl);

    // Data should be retrieved from cache in the second call
    console.log('Is data1 equal to data2?', data1 === data2); // Should be true
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
