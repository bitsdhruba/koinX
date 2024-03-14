import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import CryptoTax from "./pages/NavBarPages/CryptoTax";
import FreeTool from "./pages/NavBarPages/FreeTool";
import ResourceCenter from "./pages/NavBarPages/ResourceCenter";
import GetStart from "./pages/NavBarPages/GetStart";
import SingleCoin from "./pages/SingleCoin";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<SingleCoin />} />
          <Route path="/cryptoTax" element={<CryptoTax />} />
          <Route path="/freeTool" element={<FreeTool />} />
          <Route path="/resourceCenter" element={<ResourceCenter />} />
          <Route path="/getStart" element={<GetStart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
