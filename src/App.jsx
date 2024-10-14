import "./App.css";
import Imagem from "./components/Imagem";
import imgMacaco from "./assets/macaco_rei.jpg";

function App() {
  return (
    <>
      <h1>Imagem Aleatória</h1>
      <Imagem url={imgMacaco} />
    </>
  );
}

export default App;
