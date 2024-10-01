import "./App.css";
import FetchDataComponent from "./components/FetchDataComponent";
import FetchingImageComponent from "./components/FetchingImageComponent";
function App() {
  return (
    <>
      <div className="App">
        <FetchingImageComponent />
        <FetchDataComponent />
      </div>
    </>
  );
}

export default App;
