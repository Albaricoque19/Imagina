import React from "react";


const Header = () => {
    return ( <
        header >
        <
        div className = "intro-logo jumbo-bg" >
        <
        h1 > Imagina < /h1> <
        img src = "https://scontent.flim29-1.fna.fbcdn.net/v/t39.30808-6/273818021_382173687116750_2533535633275848022_n.jpg?stp=dst-jpg_p640x640&_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=rKbq0BPUo4IAX_UIzYT&_nc_ht=scontent.flim29-1.fna&oh=00_AT-KAgNkcFtm_fHDQz7Ln0YbAxpAHmRkMfxWM8WegCZ8iQ&oe=62D81408"
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
          max-width: 60%;
          height: 150%;
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