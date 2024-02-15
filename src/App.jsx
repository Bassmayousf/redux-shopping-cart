import { Provider } from "react-redux";
import "./App.css";
import Navbarr from "./components/Navbarr";
import Page from "./components/Page";
import store from "./redux/products/store";

function App() {
  return (
    <Provider store={store}>
      <Navbarr/>
      <Page/>
    </Provider>
  );
}

export default App;
