import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default () => ( <
    section className = "s2" >
    <
    Container >
    <
    Row className = "flex-align" >
    <
    Col md = "5"
    lg = "3"
    className = "s2__mob-pic" >
    <
    img src = "https://cdn.pixabay.com/photo/2016/11/23/18/17/men-1854191__340.jpg"
    alt = "" /
    >
    <
    /Col> <
    Col md = "7"
    lg = "5"
    className = "s2__des" >
    <
    h1 >
    <
    span className = "bold" > Contactenos < /span>  Sabemos que su elección de servicio de catering es
    importante. <
    /h1> <
    p >
    Es por eso que ofrecemos consultas gratuitas para asegurarnos de que somos el equipo adecuado para ayudarlo a crear un evento increíble.¡Envíanos un mensaje a continuación para ponerte en contacto!
    <
    /p> <
    ul className = "s2__list" >
    <
    li > < i className = "" > Teléfono < /i>  Teléfono</li >
    <
    li > < i className = "" > Dirección: < /i>  Dirección:</li >
    <
    li > < i className = "" > Sabemos que su elección de servicio de catering es importante < /i>  ♥♥♥</li >

    <
    /ul> <
    /Col> <
    /Row> <
    /Container> <
    style > { `
        .s2 {
            font-size: 16px;
            margin-top: 4em;
        }
        .s2__mob-pic {
            margin-bottom: 4em;
        }
        @media (min-width: 768px) {
            .s2__mob-pic {
            margin-bottom: 0;
            }
        }
        
        .s2__mob-pic img {
            max-width: 100%;
        }
        .s2__des h1 {
            font-size: 2.6em;
            font-weight: 100;
            letter-spacing: 2.5px;
        }
        .s2__des .bold{
            font-weight: 700;
        }
        .s2__des p {
            font-weight: 100;
            font-size: .95em;
            line-height: 1.8;
        }
        .s2__des ul {
            font-weight: 100;
            font-size: .9em;
            letter-spacing: 1.5px;
            list-style: none;
            padding: 0;
        }
         .s2__list > li {
            padding: .5em 0;
        }
        .s2__list i {
            margin-right: 1em;
        }
        @media (min-width: 768px) {
            .flex-align {
                justify-content: center;
                align-items: center;
            }
        }
    
    ` } < /style> <
    /section>
)