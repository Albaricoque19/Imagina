import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default () => {
  return (
    <section className="s1">
      <Container>
        <Row>
          <Col md="12" className="text-center s1-intro">
            <h1>Imagina</h1>
            <h3>Somos una empresa líder en el mercado de Catering, con más de 45 años de experiencia en
                                el rubro,
                                atendiendo diferentes tipos de eventos particulares y empresariales, brindando una
                                atención personalizada con los más altos estándares.</h3>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              className="s1-avatar"
              src="https://cdn.pixabay.com/photo/2016/11/21/15/58/wedding-1846114__340.jpg"
              alt=""
            />
            <h3>Sociales</h3>
            <p>
            Somos una empresa líder en el mercado de Catering, con más de 45 años de experiencia en el
                            rubro,
                            atendiendo diferentes tipos de eventos particulares y empresariales, brindando una atención
                            personalizada con los más altos estándares.
            </p>
            <a href="">Ver Más</a>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              className="s1-avatar"
              src="https://media.istockphoto.com/photos/party-people-communication-talking-happiness-concept-picture-id668221242?b=1&k=20&m=668221242&s=170667a&w=0&h=JIcHltfkY65m02B8jKZ91etIrN62TKR_qo1iQWUdpxA="
              alt=""
            />
            <h3>Corporativos</h3>
            <p>
            Somos una empresa líder en el mercado de Catering, con más de 45 años de experiencia en
                                el rubro,
                                atendiendo diferentes tipos de eventos particulares y empresariales, brindando una
                                atención personalizada con los más altos estándares.
            </p>
            <a href="">Ver Más</a>
          </Col>
          <Col md="6" lg="4" className="text-center s1-advice">
            <img
              className="s1-avatar"
              src="https://cdn.pixabay.com/photo/2016/11/23/17/56/beach-1854076__340.jpg"
              alt=""
            />
            <h3>Bodas</h3>
            <p>
            Somos una empresa líder en el mercado de Catering, con más de 45 años de experiencia en
                                el rubro,
                                atendiendo diferentes tipos de eventos particulares y empresariales, brindando una
                                atención personalizada con los más altos estándares.
            </p>
            <a href="">Ver Más</a>
          </Col>
        </Row>
      </Container>
      <style>
        {`
        .s1 {
            font-size: 16px;
        }
        .s1-intro {
            margin-bottom: 2em;
        }
        .s1-intro h1 {
            font-size: 3em;
            font-weight: 100;
        }
        .s1-intro h3 {
            font-size: 1em;
            font-weight: 200;
            margin-top: 1em;
        }
        .s1-avatar {
            width: auto;
        }
        
        .s1-advice {
            padding: 2em;
            transition: all .5s;
        }
        .s1-advice:hover {
            box-shadow: #f2f0f0 1px 1px 10px, #f2ecec9c 1px 1px 10px;
        }
        .s1-advice h3 {
            font-size: 1.1em;
            margin-top: 2em;
            letter-spacing: 2px;
        }
        .s1-advice p {
            margin-top: 2em;
            font-size: .95em;
            line-height: 2;
            color: dimgray;
        }
        .s1-advice a {
            font-size: .95em;
            text-decoration: none;
            color: hsl(120, 2%, 34%);
            transition: all .5s;
        }
        .s1-advice a:hover {
            color: var(--brand-color);
        }
        
        `}
      </style>
    </section>
  )
}
