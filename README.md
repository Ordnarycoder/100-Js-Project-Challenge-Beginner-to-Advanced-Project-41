REST API Project

Overview

This project is a demonstration of how to use a REST API in JavaScript. The code provides examples of making GET and POST requests using the fetch API. The REST API allows users to retrieve data and send new information to a server.

Features

GET Request: Retrieve data from a REST API.

POST Request: Send data to a REST API.

Handles errors for network issues and unsuccessful responses.

How to Use

Clone or download the repository.

Open the JavaScript file in your preferred code editor.

In this project I have used https://api.restful-api.dev.

Example Code

// Fetch data from a REST API (GET request)
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data retrieved:', data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

// Send data to a REST API (POST request)
const newData = {
  name: 'John Doe',
  age: 30
};

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newData)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data successfully sent:', data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

Dependencies

A modern web browser with support for JavaScript ES6 features.

How to Run

Create an HTML file and link the JavaScript code to it.

Open the HTML file in your browser to execute the JavaScript code.

The console will display the output of the GET and POST requests.

Example HTML File

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>REST API Example</title>
</head>
<body>
    <h1>Check the Console for API Responses</h1>
    <script src="script.js"></script>
</body>
</html>

Future Enhancements

Add PUT and DELETE requests for full CRUD functionality.

Integrate with a real API to demonstrate data manipulation.

Create a user interface for interacting with the API.

License

This project is licensed under the MIT License.

