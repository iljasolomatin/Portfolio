// Header.js
import React from 'react';
import logo from '../logo.svg';
import './Header.css';

function Header() {
    return (
        <header class="portfolioHeader">
            <nav class="headerNav">
                <div class="logo fadedown" tabIndex={-1}>
                    <a href="/" aria-label='home'></a>
                </div>
                <div class="StyledLinks linksStyle">
                    <ol>
                        <li class="fadedown">
                            <a href="#">
                                About
                            </a>
                        </li>
                        <li class="fadedown">
                            <a href="#">
                                Experience
                            </a>
                        </li>
                        <li class="fadedown">
                            <a href="#">
                                Projects
                            </a>
                        </li>
                        <li class="fadedown">
                            <a href="#">
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