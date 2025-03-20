import './App.css';
import Nav from './components/Nav/Nav.jsx';


function App() {
  return (
    <>
        <header id='header'>
            <h1>The Chikitaverse Inc.</h1>
        </header>
        <nav id='navigator'>
            <Nav img='logo192.png' page='/Chikitaverse' txt='Foto de perfil' text='Chikitaverse'/>
        </nav>
    </>
  );
}

export default App;
