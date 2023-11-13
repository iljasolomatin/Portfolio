import React from "react";
import "./mainContent.css";

function MainContent() {
    return (
        <div id="content">
            <main class="mainContent mainContainer fillHeight">
                <section class="introSection introStyle">
                    <div class="fade-enter">
                        <h1>
                            Hi, my name is
                        </h1>
                    </div>

                    <div class="fade-enter">
                        <h2 class="big-heading">
                            Ilja.
                        </h2>
                    </div>

                    <div class="fade-enter">
                        <h3 class="big-heading">
                            I build things for the web.
                        </h3>
                    </div>

                    <div class="fade-enter">
                        <p>
                            I'm a recent MComp(Hons) Computer Science graduate from Bath, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between. I'm currently working with React and Next.js.
                        </p>
                    </div>
                </section>

                <section id="about" class="aboutSection aboutStyle" data-sr-id="0" style={{visibility: "visible", opacity: "1", transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", transition: "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s"}}>
                    <h2 class="numberedHeading">
                        About me
                    </h2>

                    <div class="inner">
                        <div class="aboutText">
                            <div>
                                <p>
                                    My name is Ilja Solomatin and I am a Software Engineer based in London, UK.
                                </p>

                                <p>
                                    I have graduated from the University of Bath with a Masters in Computing. I have worked with a variety of technologies, both on the front and back end, and I am always looking to learn more. My goal is to always build applications that provide pixel-perfect, performant experiences.
                                </p>

                                <p>
                                    You can read more about me on my <a href="https://www.linkedin.com/in/ilja-solomatin/" target="_blank" rel="noopener noreferrer">LinkedIn</a> profile, or check out my <a href="https://www.github.com/iljasolomatin" target="_blank" rel="noopener noreferrer">GitHub</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>


    );
}

export default MainContent;