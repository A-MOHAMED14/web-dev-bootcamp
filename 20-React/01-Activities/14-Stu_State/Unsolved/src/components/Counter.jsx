import { useState } from "react";
import CardBody from "./CardBody";

// TODO: Add a comment explaining what export default does
// It exports the Counter component, so that it can be used in another module/by another component
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // useState hook allows us to add a state variable and update the state variable using a setState method
  // Initial value is set to 0
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // When the event handler, handleIncrement is invoked, the setCount method increments the count variable by 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // TODO: Explain what is happening with this click handler
  // When the event handler, handleDecrement is invoked, the setCount method decrements the count variable by 1
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* The count variable, and the handleIncrement & handleDecrement methods are being passed to the CardBody component as props */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
