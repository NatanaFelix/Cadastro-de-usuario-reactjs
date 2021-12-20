import './App.css';
import Logo from './components/templetes/Logo';
import Nave from './components/templetes/Nave';
import Main from './components/templetes/Main';
import Footer from './components/templetes/Footer';

import 'font-awesome/css/font-awesome.min.css'
import 'react-bootstrap'
import Home from './components/templetes/Home';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nave />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
