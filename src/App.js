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
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

const AppLayout = () => {
    return (
        <>
        <Header />
        <Body />
        <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

