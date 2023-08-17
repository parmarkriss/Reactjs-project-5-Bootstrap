import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Header from './Components/Header';
import Offer from './Components/Offer';
import About from './Components/About';
import Client from './Components/Client';
import Contact from './Components/Contact';
import Info from './Components/Info';
import Footer from './Components/Footer';

function App() {
  return (
     <>
       <Header/>
       <Offer/>
       <About/>
       <Client/>
       <Contact/>
       <Info/>
       <Footer/>
     </>
  );
}

export default App;