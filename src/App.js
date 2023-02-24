import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Fundo from './components/Page-Home';
import Skills from './components/Page-Skills';
import Projects from './components/Page-Projects';
import Contato from './components/Page-Contact';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Fundo />
      <Skills />
      <Projects />
      <Contato />
    </div>
  );
}

export default App;
