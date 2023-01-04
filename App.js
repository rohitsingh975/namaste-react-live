/**
 * HMR - Hot module replacement
 * File Watcher Algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super fast build Algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser - Add polyfills
 * HTTPS on dev
 * Port number 
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree Shaking
 * Transitive Dependencies
 */


import React from "react";
import ReactDOM from "react-dom/client";


const heading2 = <h1 id="title" key="h2">Namaste React</h1>;


//React Component
// - Functional
const HeaderComponent = () => {
    return (
        <div>
            <h1>Namaste React from functional component</h1>
            <h2>This is a h2 tag</h2>
        </div>
    );
};

/**Component Composition*/
const HeaderComponent1 = () => 
(
    <div>
        {heading2}
        <HeaderComponent/>
        <h1>Namaste React from another functional component</h1>
        <h2>This is a another h2 tag</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent1/>);

