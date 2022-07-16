import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import Sec1 from "./components/section-1";
import Sec2 from "./components/section-2";
import Sec3 from "./components/section-3";
import Carousel from "./components/carousel";
import Sec6 from "./components/section-6";

function App() {
  return (
    <div className="app-wrapper">
      <Nav />
      <Header />
      <Carousel />
      <Sec1 />
      <Sec3 />  
      <Sec2 />  
      <Sec6 />
      <style jsx global>{`
        .app-wrapper {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          font-size: 14px;
          --brand-color: #71c55d;
          --gray-color-1: #777;
          --gray-color-2: #555;
        }
        a {
          color: inherit;
        }
        a:hover {
          text-decoration: none;
        }
        .jumbo-bg {
          background: transparent;
          background-image: url(https://bootstrapmade.com/demo/themes/eStartup/img/hero-bg.png);
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: 100%;
        }
        @media (min-width: 1024px) {
          .jumbo-bg {
            background-attachment: fixed;
          }
        }
      `}</style>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
