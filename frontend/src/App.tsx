import { BrowserRouter } from "react-router";
import AppRoutes from "./router/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
