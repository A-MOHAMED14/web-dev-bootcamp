function function1() {
  console.log("function 1");
  function1();
}

function function2() {
  console.log("function 2");
  function3();
}

function function3() {
  console.log("function 3");
    function4();    
}

function function4() {
  console.log("function 4");
}

function1();