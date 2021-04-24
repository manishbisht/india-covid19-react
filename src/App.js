import GoogleSheetsProvider from 'react-db-google-sheets';
import { HashRouter, Route } from "react-router-dom";
import Home from './pages/home';
import Main from './pages/main';

function App() {
  return (
    <GoogleSheetsProvider>
      <HashRouter>
        <Route exact path="/" component={Main}/>
        <Route exact path="/states" component={Home}/>
      </HashRouter>

    </GoogleSheetsProvider>
  );
}

export default App;
