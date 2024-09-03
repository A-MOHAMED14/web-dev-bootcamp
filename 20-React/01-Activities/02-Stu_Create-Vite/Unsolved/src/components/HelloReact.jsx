// TODO: Add a comment explaining what a react component is
// A React component is like a building block for an application. It's a small piece that you can create, reuse, and combine to build the whole application.
// We can pass data to these components and even render other components inside other components.
// The `HelloReact` component is a child of the `App` component and is responsible for rendering the "Hello World" header.

function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  return <h2>Hello World! Here is {text}</h2>;
}

export default HelloReact;
