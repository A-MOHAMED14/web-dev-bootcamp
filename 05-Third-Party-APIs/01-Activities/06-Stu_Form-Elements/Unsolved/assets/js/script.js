const shoppingFormEl = $("#shopping-form");
const shoppingInputEl = $('input[name="shopping-input"]');
const shoppingListEl = $("#shopping-list");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function addNewItem(event) {
  event.preventDefault();

  // retrieve the new shopping item you wish to add
  let shoppingItem = shoppingInputEl.val();

  //   If no item is entered, don't add an empty list element
  if (!shoppingItem) {
    alert("Enter a shopping item");
    return;
  }

  // create new list item
  const listEl = $("<li>");

  // Add shopping item to li
  listEl.text(shoppingItem);

  // Add the new list item to the end of the ul
  shoppingListEl.append(listEl);

  // Clear input field
  shoppingInputEl.val("");
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", addNewItem);
