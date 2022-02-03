import { Provider } from "react-redux";
import { Routing } from "./components/Routes";
import "./App.css";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <Routing />
        </Provider>
      </PersistGate>
    </Provider>
  );
}

export default App;
