import { Provider } from "react-redux";
import { Routing } from "./components/Routes";
import "./App.css";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Routing />
      </PersistGate>
    </Provider>
  );
}

export default App;
