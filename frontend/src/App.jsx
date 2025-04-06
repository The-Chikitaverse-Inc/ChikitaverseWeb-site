import { Outlet } from 'react-router-dom'
import './App.css';

//! Components
import ImagePage from './components/ImagePage/ImagePage.jsx';
import UserName from './components/UserName/UserName.jsx';
import NavList from './components/NavList/NavList.jsx';

function App() {
  return (
    <>
        <header id='header'>

            <ImagePage 
                page='/'
                img='logoChiktaverse.png'
                textalt='Logo do Chikitaverso'
                borderad={false} />
    
            <h1>The Chikitaverse Inc.</h1>
        </header>
      
        <main id='container'>
        
          <aside id='aside'>
            <ImagePage 
                page='/profile'
                img='chikita.jpeg'
                textalt='Foto de perfil' 
                borderad={true} />
            
            <UserName />

            <iframe 
                src="https://discordapp.com/widget?id=1311765282389360650&theme=dark"
                allowtransparency="true"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                id='widget' />

          </aside>

          <section id='content'>
            <Outlet id='outlet' />
          <footer>
              <p>&copy;2025 Todos os Direitos reservados - The Chikitaverse Inc.</p>
          </footer>
          </section>

          <nav id='navigator'>
              
              <h3>Menu</h3>

              <NavList page='/chikitaverse' img='blackhole.svg' figcap='Chikitaverso' />
          </nav>
        </main>
    </>
  );
}

export default App;
