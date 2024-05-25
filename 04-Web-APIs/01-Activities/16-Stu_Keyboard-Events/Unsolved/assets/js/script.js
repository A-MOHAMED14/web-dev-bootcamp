var keyPressedEl = document.querySelector("#key");
var keyCodeEl = document.querySelector("#code");
var StatusEl = document.querySelector("#status");

function keydownAction(event) {
  // TODO: Complete keydown function
  keyPressedEl.textContent = event.key;
  keyCodeEl.textContent = event.code;
  StatusEl.textContent = event.type;
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
