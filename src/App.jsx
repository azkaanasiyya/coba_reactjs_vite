import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
  <div>
    <NavbarComponent />

    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/kelas" Component={KelasPage} />
      <Route path="/testimonial" Component={TestimonialPage} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/syaratketen" Component={SyaratKetentuanPage} />
    </Routes>

    <FooterComponent />
  </div>
  );
}

export default App;


