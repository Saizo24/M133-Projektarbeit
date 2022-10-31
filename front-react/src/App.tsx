import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import { SnackbarContextProvider } from './components/other/context/snackBars/SnackBarContext';
import BrowseGalleriesPage from './components/pages/BrowseGalleriesPage';
import GalleryPage from './components/pages/GalleryPage';
import UserGalleryPage from './components/pages/UserGalleryPage';
import RegisterUserPage from './components/pages/RegisterUserPage';

function App() {
  return (
    <SnackbarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register/" element={<RegisterUserPage />} />
          <Route path="/users/:username" element={<UserGalleryPage />} />
          <Route path="/browse-galleries/" element={<BrowseGalleriesPage />} />
          <Route path="/gallery/:id" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </SnackbarContextProvider>
  );
}

export default App;
