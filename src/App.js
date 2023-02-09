import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Fundo from './components/Fundo';
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Fundo />
      <Skills />
    </div>
  );
}

export default App;
