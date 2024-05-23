//WRITE YOUR CODE BELOW

const customerDrink = {
  name: "iced latte",
  sugars: 2,
  isReady: true,
};

console.log(customerDrink);

if (customerDrink.isReady === true) {
  console.log(
    `Ready for pick-up: ${customerDrink.name} with ${customerDrink.sugars} sugars.`
  );
} else {
  console.log("Still in order queue...");
}
