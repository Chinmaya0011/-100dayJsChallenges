axios.get("https://randomuser.me/api")
  .then(response => {
    // Accessing the data property from the response
    console.log("Data:", response.data);
  })
  .catch(error => {
    // Logging the error message
    console.error("Error:", error.message);
  });
