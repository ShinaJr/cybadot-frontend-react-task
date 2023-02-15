import { Card } from "./components/Cards.js";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <SearchBar /> */}
        <div className="cards_container">
          <Card />
        </div>
      </Provider>
    </div>
  );
}

export default App;
