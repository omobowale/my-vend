import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import storeConfig from "./store";
import Routes from "./routes";

const App = () => {
    return (
        <Provider store={storeConfig}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
