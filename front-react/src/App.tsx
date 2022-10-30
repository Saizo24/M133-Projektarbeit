import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import { SnackbarContextProvider } from './components/other/context/snackBars/SnackBarContext';
import BrowseGalleriesPage from './components/pages/BrowseGalleriesPage';
import GalleryPage from './stories/pages/GalleryPage';

function App() {
  return (
    <SnackbarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BrowseGalleriesPage />} />
          <Route path="/browseGalleres/" element={<BrowseGalleriesPage />} />
          <Route path="/gallery/:id" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </SnackbarContextProvider>
  );
}

export default App;
