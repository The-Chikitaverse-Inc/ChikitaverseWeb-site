'use client';
import { useState } from 'react';
import styles from './MenuBar.module.css'

//! Componentes
import MenuOption from '../MenuOption/MenuOption';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const s = styles

  return ( //Todo: terminar o sistema de menu mobile
    <nav>
      <div className={s.navbar_container}>
        <button className={s.menu_toggle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      <ul className={` highlightcolors ${s.nav_links} ${isOpen ? s.active : ''}`}>
        <MenuOption link='/'>
          Home
        </MenuOption>
          <MenuOption link='/chikitaverse'>
            Chikitaverse
          </MenuOption>
            <MenuOption link='/discordbot'>
              Discord Bot
            </MenuOption>
      </ul>
    </nav>
  );
}
