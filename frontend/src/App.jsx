import { Outlet } from 'react-router-dom'
import './App.css';

//! Components
import Nav from './components/Nav/Nav.jsx';
import ImagePage from './components/ImagePage/ImagePage.jsx';


function App() {
  return (
    <>
        <header id='header'>

            <ImagePage page='/' img='logoChiktaverse.png' textalt='Logo do Chikitaverso' borderad={false} />
            <h1>The Chikitaverse Inc.</h1>

        </header>
      
        <main id='container'>
        
          <nav id='navigator'>
            <ImagePage page='/profile' img='chikita.jpeg' textalt='Foto de perfil' borderad={true}/>

            <Nav img='logo192.png' page='/chikitaverse' txt='Foto da Pagina' text='Chikitaverse'/>
            <Nav img='logo192.png' page='/discordbot' txt='Foto da Pagina' text='Bot do Discord'/>

            <iframe src="https://discordapp.com/widget?id=1311765282389360650&theme=dark"  allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" id='widget'></iframe>
          </nav>

          <section id='content'>
            <Outlet/>
          </section>
        
        </main>
    </>
  );
}

export default App;
