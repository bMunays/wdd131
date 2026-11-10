
// declare three variables that hold references to 
// the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('submit');
const list = document.querySelector('#list');

// Create a li element that will hold each entry's chapter title
// and an associated delete button
// NB. The variable name does not have to match the element type being created.
const chapterTitle = document.createElement('title');

// Create a delete button.
const deleteButton = document.createElement('button');

// Populate the li element variable's textContent or innerHTML with the input value
list.textContent = input.value;

// Set the delete button's textContent to ❌
deleteButton.textContent = '❌';

// Append the delete button to the li element
li.append('deleteButton');

// Append the li element variable to the unordered list in your HTML
list.append('li');

