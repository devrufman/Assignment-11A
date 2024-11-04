/**
 1. Use JavaScript to select all <p> elements using getElementsByTagName( ).
 2.Change the content of the first paragraph to "This is the updated paragraph 1".
3. Print the <p> elements collection using console.log().
 */

const paragraph = document.getElementsByTagName("p");
const paragraph1 = document.getElementById("paragraph-1");
paragraph1.textContent = "This is the updated paragraph 1";

console.log(paragraph);

/**
 1. Use JavaScript to select the button using getElementById( ).
2. Add a click event listener that changes the button text to "Button Clicked!" when clicked.
3. Print "Button was clicked" inside the event handler using console.log( ).
 */

const button = document.getElementById("btn");

button.addEventListener("click", () => {
  button.textContent = "Button Clicked!";
  console.log("Button was clicked");
});

/**
 1. Use querySelectorAll() to select all elements with the class item.
2. Change the second item’s text to "Updated Item 2".
3. Print the NodeList of items using console.log( ).
 */

const items = document.querySelectorAll(".item");
const item2 = document.querySelector(".item2");
item2.textContent = "Updated Item";
console.log(item2);

console.log(items);

/**
 1. Use querySelector() to select the input field with the class user-input.
2. Add a keydown event listener that prints "Key pressed" whenever a key is pressed.
3. Also print the current value of the input field using console.log() inside the event handler.
 */

const userInput = document.querySelector(".user-input");

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Key pressed");
    console.log(userInput.value);
    userInput.value = "";
  }
});

/**
 1. Use JavaScript to select the <img> element using getElementById( ).
2. Add a title attribute with the value "Bootcamp Image".
3. Print the <img> element using console.log( ).
 */

const image = document.getElementById("img");
console.log(image);

/**
 1. Use JavaScript to select all elements with the class box using getElementsByClassName().

2. Change the background color of the second box to "yellow".

3. Print the collection of elements using console.log().
 */

const box = document.getElementsByClassName("box");
box[1].style.backgroundColor = "yellow";
console.log(box);


/*
1. Use JavaScript to select the <h2> element using querySelector() with the class .header.
2. Change its content to "Welcome to FiTech!".
3. Print the selected element using console.log().
*/

const header = document.querySelector(".header");
header.textContent = "Welcome to FiTech!";
console.log(header);

/*
1. Select the <div> element using getElementById().
2. Change its width to 200px and background color to "green".
3. Print the modified element using console.log( )
*/

const conatiner = document.getElementById("box");
conatiner.style.width = '200px'
conatiner.style.backgroundColor = 'green'
console.log(conatiner);


/*
1. Use JavaScript to select the <a> element using getElementById( ).
2. Retrieve the value of the href attribute using getAttribute( ).
3. Print the value of the href attribute using console.log( )
*/

const githubLink = document.getElementById("github-link");
const link = githubLink.getAttribute("href");
console.log(link);

