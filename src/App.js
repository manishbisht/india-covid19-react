import GoogleSheetsProvider from "react-db-google-sheets";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import StateWiseDetails from "./pages/stateWiseDetails";
import Header from "./components/header";
import Footer from "./components/footer";
import Loader from "./components/loader";
import ReactGA from "react-ga";

const config = {
    dataLoading: {
        component: Loader,
    },
};

ReactGA.initialize("UA-58136220-2");
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
    return (
        <>
            <HashRouter>
                <Header />
                <Route
                    exact
                    path="/:stateName"
                    render={() => (
                        <GoogleSheetsProvider config={config}>
                            <StateWiseDetails />
                        </GoogleSheetsProvider>
                    )}
                />
                <Route exact path="/" component={Home} />
                <Footer />
            </HashRouter>
        </>
    );
};

export default App;
