import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default () => ( <
    section className = "s3" >
    <
    Container >
    <
    div className = "s3__titles" >
    <
    h1 > Galeria. < /h1> <
    h4 > Imagen1 < /h4> <
    /div> <
    Row className = "s3__box-wrapper" >
    <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://bootstrapmade.com/demo/themes/eStartup/img/svg/paint-palette.svg"
    alt = "" /
    >
    <
    h3 > Galeria < /h3> <
    p >
    Imagen 2 <
    /p> <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://bootstrapmade.com/demo/themes/eStartup/img/svg/vector.svg"
    alt = "" /
    >
    <
    h3 > Galeria < /h3> <
    p >
    Imagen 3 <
    /p> <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://bootstrapmade.com/demo/themes/eStartup/img/svg/design-tool.svg"
    alt = "" /
    >
    <
    h3 > Galeria < /h3> <
    p >
    Imagen 4 <
    /p> <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://bootstrapmade.com/demo/themes/eStartup/img/svg/asteroid.svg"
    alt = "" /
    >
    <
    h3 > Galeria imagen 5 < /h3> <
    p >
    imagen 5 <
    /p> <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://bootstrapmade.com/demo/themes/eStartup/img/svg/asteroid.svg"
    alt = "" /
    >
    <
    h3 > Galeria < /h3> <
    p >
    imagen 6 <
    /p> <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://bootstrapmade.com/demo/themes/eStartup/img/svg/cloud-computing.svg"
    alt = "" /
    >
    <
    h3 > Galeria 7 < /h3> <
    p >
    imagen 7 <
    /p> <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://bootstrapmade.com/demo/themes/eStartup/img/svg/pixel.svg"
    alt = "" /
    >
    <
    h3 > Galeria 8 < /h3> <
    p >
    imagen 8 <
    /p> <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://bootstrapmade.com/demo/themes/eStartup/img/svg/code.svg"
    alt = "" /
    >
    <
    h3 > Galeria 9 < /h3> <
    p >
    imagen 9 <
    /p> <
    /Col> <
    /Row> <
    /Container> <
    style > { `
    .s3 {
        font-size: 16px;
        margin-top: 10em;
    }
    .s3__titles {
        margin-bottom: 2em;
    }
    .s3__titles h1 {
        font-size: 2.6em;
        font-weight: 100;
        text-align: center;
    }
    .s3__titles h4 {
        font-size: .9em;
        font-weight: 100;
        text-align: center;
        margin-top: 1.8em;
        color: hsl(0, 2%, 48%);
    }
    .s3__box-wrapper {

    }
    .s3__box-wrapper {
        text-align: center;
    }
    .s3__box-item {
        padding: 2em;
        transition: all .5s;
    }
    .s3__box-item:hover {
        box-shadow: #ece9e9 1px 1px 15px;
    }
    .s3__box-item img {
        width: 60px;
    }
    .s3__box-item h3 {
        font-size: .9em;
        line-height: 2;
        font-weight: 700;
        letter-spacing: 1.5px;
        margin: 1.6em 0;
        text-transform: uppercase;
    }
    .s3__box-item p {
        font-weight: 100;
        font-size: .95em;
        line-height: 2;
        color: dimgray;
    }
    
    ` } < /style> <
    /section>
)