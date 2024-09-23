import { Provider } from "react-redux";
import store from "./store.js";

export default function CarProvider(props) {
  return <Provider store={store} {...props} />;
}
