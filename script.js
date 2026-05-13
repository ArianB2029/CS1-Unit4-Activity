// Create a boolean variable to track current mode
let darkMode = false;

/* NEW JS FUNCTION: document.querySelector() lets us SELECT an HTML ELEMENT and store a reference to it in a VARIABLE
*/

// select by tag type
const body = document.querySelector("body");
// heading is a VARIABLE that points to the h1 ELEMENT with an id="main-heading" -> just like CSS selection!
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
const image = document.querySelector("#image");

// JS can now change attributes & properties
heading.textContent = "Light & Dark Mode Website"; // JS wroteHTML code!
heading.style.color = "purple";
heading.style.background = "plum";
body.style.background = "lavender";
heading.style.fontSize = "30px";

// Define what happens when button is clicked
function toggleMode() {
    // 1. Flip the value of darkMode (boolean variable)
    darkMode = !darkMode;
    console.log(darkMode);

    // 2. Conditionally apply styles based on the mode
    if (darkMode == true) {
        console.log("apply dark mode");
        body.style.background = "black";
        heading.style.color = "lightgrey";
        description.style.color = "white";
        heading.style.background = "darkgrey";
        toggleBtn.style.background = "darkgrey";
        description.textContent = "Welcome to the Dark Side";
        toggleBtn.textContent = "Switch to Light";
        image.src = "nighttime.avif";
    }
    else {
        console.log("apply light mode");
        body.style.background = "white";
        heading.style.color = "darkgrey";
        description.style.color = "black";
        heading.style.background = "lightgrey";
        toggleBtn.style.background = "lightgrey";
        description.textContent = "Welcome to the Light Side";
        toggleBtn.textContent = "Switch to Dark";
        image.src = "daytime.webp";
    }
}

// Attach function to the button
toggleBtn.addEventListener("click", toggleMode);





// REVIEW
// 1. Select an HTML element for JS to target
const hackerBtn = document.querySelector("#hacker");
// 2. Attach click event listener to trigger a function
hackerBtn.addEventListener("click", setHackerMode);
// 3. Define what happens when event triggers function
function setHackerMode() {
    body.style.background = "black";
    body.style.fontFamily = "monospace";
    description.style.color = "rgb(103, 252, 44)";
    description.textContent = "YOU HAVE BEEN HACKED :(";
    heading.style.background = "black";
    image.src = "https://i.guim.co.uk/img/media/97795d804327bfe41d52e3fb029fc8d370693f0b/0_258_4962_2978/master/4962.jpg?width=1200&quality=85&auto=format&fit=max&s=2eb7d50c3c5009fd3b0d7777a5305bda";
}

const duckBtn = document.querySelector("#duck");

duckBtn.addEventListener("click", setDuckMode);

function setDuckMode() {
    body.style.background = "rgba(233, 255, 197, 0.89)";
    body.style.fontFamily = "cursive";
    description.style.color = "hsl(46, 99%, 49%)";
    description.textContent = "🦆 Quack Quack Quack Quack Quack Quack Quack Quack Quack! 🦆";
    heading.style.background = "white";
    heading.style.color = "rgb(255, 215, 146)"
    image.src = "https://lirp.cdn-website.com/2740280e/dms3rep/multi/opt/Auggie-2a12d0bb-640w.jpg";
    image.style.border = "10px solid white";
}