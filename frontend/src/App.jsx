import './App.css';
import Nav from './components/Nav/Nav.jsx';


function App() {
  return (
    <>
        <header id='header'>
            <h1>The Chikitaverse Inc.</h1>
        </header>
        <nav id='navigator'>
            <Nav img='logo192.png' page='/chikitaverse' txt='Foto da Pagina' text='Chikitaverse'/>
            <Nav img='logo192.png' page='/discordbot' txt='Foto da Pagina' text='Bot do Discord'/>
        </nav>
    </>
  );
}

export default App;
