import GoogleSheetsProvider from "react-db-google-sheets";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import StateWiseDetails from "./pages/stateWiseDetails";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
    return (
        <>
            <Header />
            <HashRouter>
                <Route
                    exact
                    path="/:stateName"
                    render={() => (
                        <GoogleSheetsProvider>
                            <StateWiseDetails />
                        </GoogleSheetsProvider>
                    )}
                />
                <Route exact path="/" component={Home} />
            </HashRouter>
            <Footer />
        </>
    );
};

export default App;
