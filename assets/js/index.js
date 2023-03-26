// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import hljs from "highlight.js/lib/common";
import 'highlight.js/styles/base16/dracula.css';

// import infiniteScroll from "./infiniteScroll";


// Call the menu and infinite scroll functions
menuOpen();
// infiniteScroll();

// Highlight.js
hljs.initHighlightingOnLoad();
// document.addEventListener('DOMContentLoaded', (event) => {
//     document.querySelectorAll('pre code').forEach((el) => {
//         hljs.highlightElement(el);
//     });
// });
