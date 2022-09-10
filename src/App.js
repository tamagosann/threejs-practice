import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages";
import { Page1 } from "./pages/page1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<IndexPage />} />
        <Route path={`/page1`} element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
