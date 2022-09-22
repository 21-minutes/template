import "./App.css";
import Header from "./components/Header/Header.jsx";
import Article from "./components/Article/Article.jsx";
function App() {
  return (
    <div>
      <Header />
      <Article title="Test">{varName}</Article>
      <Article title="asdas" content={contentVar} />
      <div className="template-footer">footer</div>
    </div>
  );
}

export default App;
