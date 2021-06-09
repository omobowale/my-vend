import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import storeConfig from "./store";
import Routes from "./routes";
import { authCheck } from "./modules/web/store/actions";
import { toast } from "react-toastify";

toast.configure();

storeConfig.dispatch(authCheck());

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
