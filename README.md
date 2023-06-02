# LinkSnap

LinkSnap is an API for URL shortening built with Node.js and Express. It utilizes the nanoid package to generate unique and random IDs for the shortened URLs.

## Features

- URL Shortening: The API allows users to shorten long URLs by making a POST request to the `/shorten` endpoint.
- In-Memory Database: The shortened URLs are stored in an in-memory database.
- JSON Response: The API responds with the shortened URL in JSON format.
- URL Redirection: Users can access the original URL by making a GET request to the shortened URL.
- External API Integration: The code includes an `/api` endpoint that makes HTTP GET requests to an external API using Axios.
- Authorization and Security: The Express session management middleware ensures that the API endpoints require HTTPS and authorization for access.
- Environment Variables: The code uses environment variables to store sensitive information, such as the RapidAPI key and session secret.

## Testing Instructions

To test the LinkSnap API, please follow these steps:

1. Make sure you have Node.js installed on your machine.
2. Open a terminal window and navigate to the directory where the code is saved.
3. Install the required dependencies by running the command: `npm install`.
4. Create a file named `.env` in the root directory of the project and add the following environment variables:
   ```
   RAPIDAPI_KEY=your_rapidapi_key
   SESSION_SECRET=your_session_secret
   ```
   Replace `"your_rapidapi_key"` and `"your_session_secret"` with your actual RapidAPI key and session secret.
5. Start the server by running the command: `npm start` or `node index.js`.
6. The server should now be running on port 3000.
7. To test the API, you can use a tool like POSTMAN or send a POST request to `http://localhost:3000/shorten` with a JSON body containing a long URL, like this:
   ```
   { "url": "https://www.example.com/very/long/url/that/needs/to/be/shortened" }
   ```
8. The response should contain a shortened URL, like this:
   ```
   { "url": "https://example.com/UOvN49" }
   ```
9. You can also test the redirection by visiting the shortened URL in a web browser. It should redirect you to the original long URL.

![Screenshot 2023-04-27 at 10 28 46 PM](https://user-images.githubusercontent.com/84411852/235039900-13c7874d-6384-4a32-bd93-e1e1cb4fafb9.png)

## Technologies Used

- [Node.js](https://nodejs.org/) - A JavaScript runtime environment for building server-side applications.
- [Express](https://expressjs.com/) - A fast, unopinionated, and minimalist web framework for Node.js.
- [nanoid](https://github.com/ai/nanoid) - A small, secure, URL-friendly unique ID generator.
- [Axios](https://axios-http.com/) - A promise-based HTTP client for making HTTP requests.
