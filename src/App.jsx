import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoveQuestion from "./components/LoveQuestion";
import BirthdayHome from "./pages/BirthdayHome";
import ForYou from "./pages/ForYou";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoveQuestion />} />

        <Route path="/home" element={<BirthdayHome />} />

        <Route path="/for-you" element={<ForYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
