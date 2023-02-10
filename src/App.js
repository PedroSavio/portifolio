import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Fundo from './components/Page-Home';
import Skills from './components/Page-Skills';
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
