import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import { SnackbarContextProvider } from './components/other/context/snackBars/SnackBarContext';
import BrowseGalleriesPage from './components/pages/BrowseGalleriesPage';
import GalleryPage from './components/pages/GalleryPage';
import UserGalleryPage from './components/pages/UserGalleryPage';
import RegisterUserPage from './components/pages/RegisterUserPage';
import { ProtectedRoute, ProtectedRouteProps } from './components/other/auth/ProtectedRoute';
import { isLoggedIn } from './services/AuthService';



const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  isAuthenticated: isLoggedIn(),
  authenticationPath: '/login',
};

function App() {
  return (
    <SnackbarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BrowseGalleriesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/" element={<RegisterUserPage />} />
          <Route path='/users/' element={
            <ProtectedRoute
              isAuthenticated={isLoggedIn()}
              authenticationPath={defaultProtectedRouteProps.authenticationPath}
              outlet={<UserGalleryPage />} />}>
          </Route>
          <Route path="/gallery/:id" element={
            <ProtectedRoute
              isAuthenticated={isLoggedIn()}
              authenticationPath={defaultProtectedRouteProps.authenticationPath}
              outlet={<GalleryPage />} />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </SnackbarContextProvider>
  );
}

export default App;
