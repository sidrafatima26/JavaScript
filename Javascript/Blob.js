/*
In JavaScript, a Blob (Binary Large Object) is an object representing raw data, typically of binary data type, that can be used to store and manipulate large amounts of data, such as files, images, audio, or other multimedia content. Blobs are often used in web applications for tasks like uploading files, creating downloadable content, or handling binary data received from a server.

Properties:

size: Returns the size of the blob in bytes.
type: Returns the MIME type of the blob.
Methods:

slice(start, end, contentType): Returns a new Blob object containing the specified portion of the original blob. The start and end parameters define the range of bytes to include in the slice. The optional contentType parameter allows you to specify a new MIME type for the sliced blob.

stream(): Returns a ReadableStream representing the blob's data.

*/

// Create an array of data (e.g., bytes representing an image)
const dataArray = [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52, /* ... more bytes */];

// Convert the array into a Uint8Array
const uint8Array = new Uint8Array(dataArray);

// Create a Blob object from the Uint8Array
const blob = new Blob([uint8Array], { type: 'image/png' });

console.log(blob);
