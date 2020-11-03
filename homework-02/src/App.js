import "./App.css";
import Posts from "./components/posts";
import Carousel from "./components/carousel";

function App() {
  return (
    <div className="App">
      <Posts displayCount="5" />
      <Carousel />
    </div>
  );
}

export default App;
