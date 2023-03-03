import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Fundo from './components/Page-Home';
import Skills from './components/Page-Skills';
import Projects from './components/Page-Projects';
import Contato from './components/Page-Contact';
import Footer from './components/Footer';
function App() {
  return (
      <div className="App">
        <NavBar />
        <Fundo />
        <Skills />
        <Projects />
        <Contato />
        <Footer />
      </div>
  );
}

export default App;
