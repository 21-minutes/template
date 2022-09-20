import './App.css'
import Header from './components/header/header.jsx'

function App() {

  return (
    <div>
    <Header />
    <div className="template-container">
      <div className="container-sidebar">sidebar</div>
      <div className="container-content">
        <div className="title">Current State of Artificial Intelligence</div>
        <div className="article-title">Article title</div>
        <div className="article-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio
          dolorum rem repellendus, fugit magni pariatur voluptates hic non
          officia nesciunt, vel libero animi beatae! Incidunt beatae dicta
          consequatur nesciunt!
        </div>
      </div>
      <div className="ad-container">advertisment</div>
    </div>
    <div className="template-footer">footer</div>
    </div>
  )
}

export default App
