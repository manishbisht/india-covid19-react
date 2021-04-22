import GoogleSheetsProvider from "react-db-google-sheets";
import Home from "./pages/home";

function App() {
  return (
    <GoogleSheetsProvider>
      <Home />
    </GoogleSheetsProvider>
  );
}

export default App;
