// Fetch data from a REST API (GET request)
fetch('https://api.restful-api.dev/objects')
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

fetch('https://api.restful-api.dev/objects', {
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
