import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import { SnackbarContextProvider } from './components/other/context/snackBars/SnackBarContext';
import BrowseGalleriesPage from './components/pages/BrowseGalleriesPage';

function App() {
  return (
    <SnackbarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BrowseGalleriesPage />} />
        </Routes>
      </BrowserRouter>
    </SnackbarContextProvider>
  );
}

export default App;
