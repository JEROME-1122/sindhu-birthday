import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoveQuestion from "./components/LoveQuestion";
import BirthdayHome from "./pages/BirthdayHome";
import ForYou from "./pages/ForYou";
import Videos from "./pages/Videos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoveQuestion />} />

        <Route path="/home" element={<BirthdayHome />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/for-you" element={<ForYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
