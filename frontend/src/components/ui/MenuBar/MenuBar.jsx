"use client"
import styles from './MenuBar.module.css'
import '../../css/theme.css'

//! Components
import MenuOption from '../MenuOption/MenuOption'

class MobileNavbar {//Todo: Fazer o menu funcionar
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".menu",
    ".iten",
    ".iten li",
  );
  mobileNavbar.init();

export default function NavBar() {
    return (
        <nav className={styles.menu}>
            <div className={styles.menubar1}></div>
            <div className={styles.menubar2}></div>
            <div className={styles.menubar3}></div>

            <ul className={` ${styles.iten} glcolors `}>
                <MenuOption link='/'>Home</MenuOption>
                <MenuOption link='/chikitaverse'>Chikitaverso</MenuOption>
                <MenuOption link='/discordbot'>Discord Bot</MenuOption>
            </ul>
        </nav>
    )
}