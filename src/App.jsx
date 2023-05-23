import './App.css';
import Home from './components/screens/Home';
import Nosotres from './components/screens/Nosotres';
import Paseos from './components/screens/Paseos';
import Resort from './components/screens/Resort';
import Educacion from './components/screens/Educacion';

function App() {
  

  return <div className='App'>
    <Home />
    <Resort />
    <Paseos />
    <Educacion />
    <Nosotres />
  </div>
}

export default App
