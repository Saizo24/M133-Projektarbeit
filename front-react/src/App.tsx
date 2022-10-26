import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import { SnackbarContextProvider } from './components/other/context/snackBars/SnackBarContext';

function App() {
  return (
    <SnackbarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </SnackbarContextProvider>
  );
}

export default App;
