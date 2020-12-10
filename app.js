var startGame = document.querySelector("#start");
var timeDisplay = document.querySelector("#seconds")
var counter = 30;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     		clearInterval(interval);
      	$('#timer').html("<h3>Count down complete</h3>");  
        return;
    }else{
    	$('#timer').text(counter);
      console.log("Timer --> " + counter);
    }
}, 1000);

var id = questions = [
    { q: "Your foot is the same length as your forearm.", a: "t"},
    { q: "== ≠ ===?", a: "t"},
    { q: "Peanuts can be used to make dynamite.", a: "t"},
    { q: "On Mars, sunsets are green.", a: "f"},
    { q: "6 national flags have the color purple on them.", a: "f"},
    { q: "The shortest scientific -ology word is 'oology'.", a: "t"},
    { q: "The majority of polar bears live in the Artic.", a: "f"},
    { q: "Ada Lovelace invented JavaScript", a:"f"},
    { q: "JavaScript is a front-end only language", a: "f"},
    { q: "3>2>1", a: "f"},
    { q: "Dolly Parton is Miley Cyrus' Godmother", a: "t"},
    { q: "Darth Vader famously says the line “Luke, I am your father” in The Empire Strikes Back", a: "f"},
    { q: "The mathematical name for the shape of a Pringle is hyperbolic paraboloid", a: "t"},
    { q: "Meghan Markle’s first name is Rachel", a: "t"},
    { q: "Donald Duck’s middle name is Fauntelroy", a: "t"},
    { q: "This '#' is an octothorpe", a: "t"},
    { q: "The unicorn is the national animal of Scotland.", a: "t"},
    { q: "Elvis has 18 Grammys", a: "f"},
    { q: "The speed of a computer mouse is measured in Mikeys", a:"t"},
    { q: "The Cardinal is the most favored state bird", a: "t"},
    { q: "If Facebook was a country it would have more citizens than China", a: "t"},
    { q: "The first pair of Air Jordan's was released in 1983", a: "f"},
    { q: "Gwen Stefani's real name is Stefani Joanne Angelina Germanotta", a: "f"},
    { q: "All 7 dwarves' names end in 'Y'", a: "f"},
    { q: "I know why the caged bird sings is Toni Morrison's autobiography", a: "f"},
];

var score = 0;

for (var i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i].q);

   if((answer === true && questions[i].a === "t") || 
    (answer === false && questions[i].a === "f")) {

    score++;
    alert("Correct");
   }
   else {
       alert("Wrong!");
   }
}
alert("You got " + score  + "/" + questions.length);

