import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutOutlet from "./layouts/layoutOutlet";
import LandingPage from "./pages/landingpage";
import HeroSection from './pages/homepage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutOutlet />}>
          <Route index element={<LandingPage />} />
          <Route path="heroSection" element={<HeroSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
