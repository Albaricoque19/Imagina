import React from "react";
import { Container, Jumbotron } from "reactstrap";

const Header = () => {
    return ( <
        header >
        <
        div className >
        <
        h1 > Imagina < /h1> <
        h3 > EVENTOS + CATERING < /h3> <
        img src = "https://images.unsplash.com/photo-1532256253150-2f0e4e883a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGxvZ28lMjBpbWFnaW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        className = ""
        alt = "" /
        >
        <
        div className = "intro-button" >
        <
        a href = "" > Cotiza < /a> <
        /div> <
        div className = "company-icons" >
        <
        span className = "company-icons__item" >
        <
        i className = "fab fa-facebook" / >
        Facebook <
        /span> <
        span className = "company-icons__item" >
        <
        i className = "fab fa-twitter" / >
        Twitter <
        /span> <
        span className = "company-icons__item" >
        <
        i className = "fab fa-whatsapp" / >
        Whatsapp <
        /span> <
        /div> <
        /div>

        <
        style jsx > { `
        header {
          margin-bottom: 1rem;
          height: 100vh;
        }
        .intro-logo {
          display: flex;
          position: absolute;
          top: 5em;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
        }

        .intro-logo h1 {
          font-size: 1.8em;
          font-weight: 900;
          font-family: "Philosopher", sans-serif;
          color: var(--brand-color);
        }
        @media (min-width: 768px) {
          .intro-logo h1 {
            font-size: 3.5em;
          }
        }
        .intro-logo h3 {
          font-size: 1rem;
          font-weight: 300;
          color: var(--gray-color-1);
          margin-bottom: 3em;
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }
        .company-icons__item + .company-icons__item {
          margin-left: 1rem;
        }
        @media (min-width: 575px) {
          .company-icons__item + .company-icons__item {
            margin-left: 2rem;
          }
        }
        .company-icons__item i {
          margin-right: 5px;
        }
        .intro-button {
          margin-top: 2.3em;
          margin-bottom: 3em;
        }
        .intro-button a {
          padding: 0.65em 2.6em;
          border-radius: 20px;
          color: var(--brand-color);
          border: 1.8px solid var(--brand-color);
          background: white;
          transition: all 0.5s;
        }
        .intro-button a:hover {
          background-color: var(--brand-color);
          color: white;
        }

        .company-icons {
          color: var(--gray-color-2);
          font-size: 0.95em;
        }
        .company-icons__item {
          transition: all 0.5s;
        }
        .company-icons__item:hover {
          color: var(--brand-color);
          cursor: pointer;
        }
      ` } < /style> <
        /header>
    );
};

export default Header;