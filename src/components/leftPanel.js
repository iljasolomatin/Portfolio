import React from 'react';
import './leftPanel.css';

function LeftPanel() {
    return (
        <div class="leftPanel">
            <ul class="leftPanel fade">
                <li>
                    <a href="https://github.com/iljasolomatin" aria-label="GitHub" target="_blank" rel="noreferrer">
                        <img src="/github.svg" alt="GitHub" title="GitHub"/>
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/ilja-solomatin/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                        <img src="/linkedin.svg" alt="GitHub" title="GitHub"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default LeftPanel;