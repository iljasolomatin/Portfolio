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
            </main>
        </div>
    );
}

export default MainContent;