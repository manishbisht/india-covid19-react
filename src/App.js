import GoogleSheetsProvider from "react-db-google-sheets";
import Home from "./pages/stateWiseDetails";

function App() {
    return (
        <GoogleSheetsProvider>
            <Home />
        </GoogleSheetsProvider>
    );
}

export default App;
