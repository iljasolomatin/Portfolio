// Header.js
import React, { useEffect, useState} from 'react';
import './Header.css';

function Header() {
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
          // downscroll
          document.querySelector('.portfolioHeader').classList.add('header-up');
        } else {
          // upscroll
          document.querySelector('.portfolioHeader').classList.remove('header-up');
        }
        setLastScrollTop(st <= 0 ? 0 : st);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollTop]);

    return (
        <header class="portfolioHeader">
            <nav class="headerNav">
                <div class="logo fadedown" tabIndex={-1}>
                    <a href="/" aria-label='home'></a>
                </div>
                <div class="StyledLinks linksStyle">
                    <ol>
                        <li class="fadedown">
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li class="fadedown">
                            <a href="#experience">
                                Experience
                            </a>
                        </li>
                        <li class="fadedown">
                            <a href="#projects">
                                Projects
                            </a>
                        </li>
                        <li class="fadedown">
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                    </ol>
                    <div class="CVButtonContainer linksStyle">
                        <a class="CVButton fadedown" href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                            CV
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;