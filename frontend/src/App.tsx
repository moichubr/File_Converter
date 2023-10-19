import style from "./App.module.css"
import FileUpload from "./components/fileUpload";
import Searchbar from "./components/searchbar";

function App() {
  return (
    <div className={style.container}>
      <FileUpload />
      <Searchbar />
    </div>
  );
}

export default App;
