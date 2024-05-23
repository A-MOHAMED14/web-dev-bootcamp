// TODO: What does 'this' refer to?
// A: Refers to the window
console.log(this);

// TODO: What does 'this' refer to?
// A: Refers to the global object
function helloThis() {
  console.log("Inside this function, this is " + this);
}

// TODO: What will this log?
// A: Refers to the child object, will log 20
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// TODO: What will this log?
// A: Refers to the investor object, will log 5750
var investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
