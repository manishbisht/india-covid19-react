import GoogleSheetsProvider from "react-db-google-sheets";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import StateWiseDetails from "./pages/stateWiseDetails";

function App() {
    return (
        <GoogleSheetsProvider>
            <HashRouter>
                <Route exact path="/:stateName" component={StateWiseDetails} />
                <Route exact path="/" component={Home} />
            </HashRouter>
        </GoogleSheetsProvider>
    );
}

export default App;
