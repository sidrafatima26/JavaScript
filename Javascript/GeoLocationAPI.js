/*
The Geolocation API is a web API provided by modern web browsers that allows web applications to access the user's geographical location information. 
It enables developers to retrieve the user's latitude and longitude coordinates, 
along with other optional data such as altitude, heading, and speed, based on the device's GPS, Wi-Fi, or cellular network data.

Geolocation API: A web API that provides JavaScript interfaces for accessing geographical location information of a device, 
enabling web applications to retrieve the user's latitude, longitude, altitude, heading, and speed. 
The API is typically accessed through the navigator.geolocation object in the browser, 
and it offers methods for obtaining the current position of the device, 
monitoring changes in position over time, and handling errors that may occur during location retrieval.
*/

// Check if the Geolocation API is supported by the browser
if ("geolocation" in navigator) {
  // Geolocation is supported
  navigator.geolocation.getCurrentPosition(
    // Success callback function
    function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

      // You can use the latitude and longitude to display the user's location on a map, or perform other actions.
    },
    // Error callback function
    function(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          console.error("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.error("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.error("An unknown error occurred.");
          break;
      }
    }
  );
} else {
  // Geolocation is not supported by the browser
  console.error("Geolocation is not supported by this browser.");
}
