import GoogleSheetsProvider from "react-db-google-sheets";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Main from "./pages/main";

function App() {
    return (
        <GoogleSheetsProvider>
            <HashRouter>
                <Route exact path="/states" component={Home} />
                <Route exact path="/" component={Main} />
            </HashRouter>
        </GoogleSheetsProvider>
    );
}

export default App;
