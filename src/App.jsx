import "./App.scss";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import Article from "./pages/ArticleContent/ArticleContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/article" element={<Article />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
