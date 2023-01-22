import { Incício } from "./pages/Início";
import { About } from "./pages/About"
import { Navbar } from "./pages/Navbar"
import "react-bootstrap";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Incício />
      </main>
      <About/>
    </>
  );
}

export default App;
