// select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// Declare an array named chaptersArray
// and assign it to the results of a defined function named getChapterList
// add a compound OR condition to assign it an empty array
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// wait for button clicks
buttonElement.addEventListener("click", () => {
	if (inputElement.value != '') {  // make sure the input is not empty
    displayList(inputElement.value); // call the function that outputs the submitted chapter
    chaptersArray.push(inputElement.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    inputElement.value = ''; // clear the input
    inputElement.focus(); // set the focus back to the input
  }
});

function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');
  li.textContent = item; // note the use of the displayList parameter 'item'
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
  li.append(deleteButton);
  listElement.append(li);
  deleteButton.addEventListener('click', function () {
    listElement.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    inputElement.focus(); // set the focus back to the input
  });
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

