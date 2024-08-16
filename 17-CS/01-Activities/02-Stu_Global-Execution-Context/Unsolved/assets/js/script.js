// 1) Where is carNoise stored?
// global execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // When goFast function is invoked with an argument.
  // It is stored in the function execution context
  
  // 5) Where is makeNoise stored?
  // Function execution context of goFast
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // makeNoise function is placed on the call stack, creating a new function execution context
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// Confirm is a web API, once resolved, goFast function is placed is in the callback queue, then onto the call stack to be executed.
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
