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
 * Transitive Dependencies
 */


import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1",
{
    id:"title"
},
"Heading 1 from parcel");

const heading2 = React.createElement("h2",
{
    id:"title"
},
"Heading 2");

const container = React.createElement("div",
{
    id:"container"
},
[heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);