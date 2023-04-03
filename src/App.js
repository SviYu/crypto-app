import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/coins" element={<Coins /> } />
        <Route path="/exchanges" element={<Exchanges /> } />
        <Route path="/coin/:id" element={<CoinDetails /> } />
        <Route path="/*" element={<PageNotFound /> } />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
