# LinkSnap

LinkSnap is an API for URL shortening using Node.js and Express. It utilizes the nanoid package for generating unique and random IDs for the shortened URLs. 

The shortened URLs are stored in an in-memory database, and the API allows for creating new shortened URLs by making a POST request to the /shorten endpoint. 

The shortened URL is returned in the response in JSON format. The API also allows for accessing the original URL by making a GET request to the shortened URL.

Additionally, the code defines a /api endpoint that makes an HTTP GET request to an external API using Axios. 

The external API requires an API key, which is stored in an environment variable RAPIDAPI_KEY.

The session management middleware provided by Express is also used to ensure that the API endpoints require HTTPS and require authorization for access. 

Overall, this code provides a secure and efficient way to manage and access shortened URLs.

Steps to Test:

To run this code, first make sure you have Node.js installed on your machine. Then, follow these steps:

1) Open a terminal window and navigate to the directory where the code is saved.
2) Install the required dependencies by running the command: npm install.
3) Create a file named .env in the root directory of the project and add the following environment variables:

RAPIDAPI_KEY=your_rapidapi_key
SESSION_SECRET=your_session_secret


Replace "your_rapidapi_key" and "your_session_secret" with your actual RapidAPI key and session secret.


4. Start the server by running the command: npm start or node index.js.

The server should now be running on port 3000. You can test it by sending a POST request to http://localhost:3000/shorten with a JSON body containing a long URL, like this:

{
  "url": "https://www.example.com/very/long/url/that/needs/to/be/shortened"
}
The response should contain a shortened URL, like this:

{
  "url": "https://example.com/UOvN49"
}

You can also test the redirection by visiting the shortened URL in a web browser. It should redirect you to the original long URL.

or it can be tested using POST request in the POSTMAN application:

![Screenshot 2023-04-27 at 10 28 46 PM](https://user-images.githubusercontent.com/84411852/235039900-13c7874d-6384-4a32-bd93-e1e1cb4fafb9.png)
