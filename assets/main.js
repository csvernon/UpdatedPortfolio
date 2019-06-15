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




var page = "index";

$(document).ready(function () {
  $("#page").text("");
  $("#page").append("<h2>About</h2>");
  $("#page").append("<hr>");
  $("#page").append("<p>From a young age I have been obsessed with technology, this passion lead me through college and into the professional workplace where I focused on Information Technology. After nearly two years working as an IT Specialist, my creative drive brought me to the UNC Coding Bootcamp where I studied to be a Full-Stack Developer. I have experience using technology to solve problems efficiently and automating processes to make sure they execute flawlessly. It is my personal goal to make a positive impact wherever I go, in my personal life and in the workplace. </p>");
  $("#page").append('<div class="container">');
  $("#page").append('<iframe src="https://drive.google.com/file/d/123tVUv9WDjkjX86gcG8kOnTfcU-owHec/preview" width="1200" height="600"></iframe>');
  $("#page").append("</div>");
  $("#page").append('<a href="https://drive.google.com/uc?export=download&id=123tVUv9WDjkjX86gcG8kOnTfcU-owHec" target="_blank">Download</a>');

});


$("#indexBtn").on("click", function (event) {
  if (page != "index"){
  $("#page").text("");
  $("#page").append("<h2>About</h2>");
  $("#page").append("<hr>");
  $("#page").append("<p>From a young age I have been obsessed with technology, this passion lead me through college and into the professional workplace where I focused on Information Technology. After nearly two years working as an IT Specialist, my creative drive brought me to the UNC Coding Bootcamp where I studied to be a Full-Stack Developer. I have experience using technology to solve problems efficiently and automating processes to make sure they execute flawlessly. It is my personal goal to make a positive impact wherever I go, in my personal life and in the workplace. </p>");
  $("#page").append('<div class="container">');
  $("#page").append('<iframe src="https://drive.google.com/file/d/123tVUv9WDjkjX86gcG8kOnTfcU-owHec/preview" width="1200" height="600"></iframe>');
  $("#page").append("</div>");
  $("#page").append('<a href="https://drive.google.com/uc?export=download&id=123tVUv9WDjkjX86gcG8kOnTfcU-owHec" target="_blank">Download</a>');
  page = "index";
  }
});

$("#contactBtn").on("click", function (event) {
if (page != "contact"){
  $("#page").text("");
  $("#page").append("<h2>Contact</h2>");
  $("#page").append("<hr>");
  $("#page").append('<form data-toggle="validator">');
  $("#page").append('Name<input id="nameInput" type="text" placeholder="John Smith" pattern="[A-Z]+[A-Za-z]* [A-Z]+[A-Za-z]*" required>');
  $("#page").append('Email<input id="emailInput" type="email" placeholder="example@email.com" pattern="[A-Za-z0-9.]+@[A-Za-z0-9]+.[A-Za-z0-9]+" required>');
  $("#page").append('Message<textarea id="messageInput" maxlength="1000"></textarea>');
  $("#page").append('<button onclick="submitResponse()" id="submitButton" action="#" class="color" required>Submit</button>');
  $("#page").append("</form>");
  page = "contact";
}
});

$("#portfolioBtn").on("click", function (event) {
  if (page != "portfolio"){
  $("#page").text("");
  $("#page").append('<h2>Portfolio</h2>');
  $("#page").append("<hr>");
  $("#page").append('<a target="_blank" href="https://csvernon.github.io/DateNight/" class="portfolio DateNight"><div class="color banner">Date Night</div></a>');
  $("#page").append('<a target="_blank" href="https://csvernon.github.io/Word-Guess-Game/" class="portfolio hangman"><div class="color banner">Hangman</div></a>');
  $("#page").append('<a target="_blank" href="https://csvernon.github.io/RPS-Multiplayer/" class="portfolio rock-paper-scissors"><div class="color banner">Rock Paper Scissors</div></a>');
  $("#page").append('<a target="_blank" href="https://see-the-stars.herokuapp.com/#" class="portfolio Project2"><div class="color banner">See The Stars</div></a>');
  $("#page").append('<a target="_blank" href="https://csvernon.github.io/TriviaGame/" class="portfolio trivia-game"><div class="color banner">Trivia Game</div></a>');
  page = "portfolio";
  }
});

function submitResponse(){
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
};