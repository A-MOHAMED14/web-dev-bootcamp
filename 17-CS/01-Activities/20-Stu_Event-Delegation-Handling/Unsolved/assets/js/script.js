const buttons = document.getElementsByTagName("button");

const clickHandler = function () {
  // TODO: Add a comment describing the purpose of this variable.
  // Create a count variable which can be used by the inner function
  let count = 0;

  // TODO: Add a comment describing what is happening.
  // returning an inner function which creates closure
  return function () {
    // TODO: Add a comment describing how this variable is being scoped.
    // Increment the scoped variable
    count++;
    // TODO: Add a comment describing how we are using the 'count' variable.
    // Use a template literal to display the count variable onto the button element.

    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
// Adding a click event to each of the buttons rather than adding it to the container which contains all the buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickHandler());
}
