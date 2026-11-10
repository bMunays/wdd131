// // select elements from the DOM:
// declare three variables that hold references to 
// the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('submit');
const list = document.querySelector('#list');

// Create a li element that will hold each entry's chapter title
// and an associated delete button
// NB. The variable name does not have to match the element type being created.
// const chapterTitle = document.createElement('title');

// Create a delete button.
// const deleteButton = document.createElement('button');

// Populate the li element variable's textContent or innerHTML with the input value
// list.textContent = input.value;

// Set the delete button's textContent to ❌
// deleteButton.textContent = '❌';

// Append the delete button to the li element
// li.append('deleteButton');

// Append the li element variable to the unordered list in your HTML
// list.append('li');



// wait for button clicks
// Create a click event listener for the Add Chapter button with addEventListener.
button.addEventListener('click', function () {
   // Check to make sure the input is not blank before completing the remaining tasks in this list.
   // Use an if block that either provides a message or does nothing and 
   // returns the .focus() to the input field.
    if (input.value.trim() !== '') {
       // create list item and give it the value of the input
		const li = document.createElement("li");
		li.textContent = inputElement.value;

		// create a button and add a click event listener
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "❌";
		deleteBtn.addEventListener("click", function () {
			listElement.removeChild(li);
			inputElement.focus();
		});

		// add the button to the list item
		li.appendChild(deleteBtn);

		// OUTPUT: finally display the completed list item to the unordered list
		listElement.appendChild(li);

		// clear the user input field
		inputElement.value = "";
	}
	// focus the user back to the input field
	inputElement.focus();

});


// Add an event listener to the delete button that removes the li element when clicked.
// deleteButton.addEventListener('click', function () {
//   list.removeChild(li);
//   input.focus();
// });

// Change the input value to an empty string to clean up the interface for the user.
// input.value = '';

// After processing, the focus (active cursor) should be sent to the input element
// input.focus();

