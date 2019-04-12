var config = {
    apiKey: "AIzaSyCPRF9swfkI34M93ZTNyOKXvvgAoRju2PA",
    authDomain: "portfoliocsv.firebaseapp.com",
    databaseURL: "https://portfoliocsv.firebaseio.com",
    projectId: "portfoliocsv",
    storageBucket: "portfoliocsv.appspot.com",
    messagingSenderId: "186318920720"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var dataRef = firebase.database();
var name = "";
var email = "";
var message = "";

$("#submitButton").on("click", function (event) {
    event.preventDefault();

    // Get the input values
    name = $("#nameInput").val().trim();
    email = $("#emailInput").val().trim();
    message = $("#messageInput").val().trim();

    dataRef.ref().push({
        Name: name,
        Email: email,
        Message: message,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    location.reload();

})

