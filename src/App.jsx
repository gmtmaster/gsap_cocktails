import React from 'react';
import {gsap} from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";


gsap.registerPlugin(ScrollTrigger, SplitText);

function App(props) {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className={"h-dvh bg-black"}>

            </div>
        </main>
    );
}

export default App;