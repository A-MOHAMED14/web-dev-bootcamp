var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  var element = event.target;

  // TODO: Complete function
  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      element.setAttribute("data-state", "visible");
      element.dataset.state = "visible";

      element.textContent = element.dataset.number;
    } else {
      element.setAttribute("data-state", "hidden");
      element.dataset.state = "hidden";

      element.textContent = "";
    }
  }
});
