import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default () => (
  <section className="s3">
    <Container>
      <div className="s3__titles">
        <h1> Galeria.</h1>
      </div>
      <Row className="s3__box-wrapper">
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src="https://img4.evepla.com/917/888/428219019178883.jpg"
            alt=""
          />
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src="http://guiamexico.com.mx/Imagenes/b/207704931-1-chikids-jardin-de-eventos-infantiles.jpeg"
            alt=""
          />
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src="https://www.produccioneschiquichiqui.com/wp-content/uploads/POW-PETROL.png"
            alt=""
          />
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src="https://www.bubalina.com/wp-content/uploads/2018/04/1-68.jpg"
            alt=""
          />
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src="https://eventosmagictime.com/wp-content/uploads/2021/10/Captura-de-pantalla-2021-10-12-a-las-7.17.21-p.m..png"
            alt=""
          />
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src="https://ideasparalasfiestas.com/wp-content/uploads/2022/01/montajes-modernos-para-fiestas-infantiles-1.jpg"
            alt=""
          />
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src="https://infomercado.pe/wp-content/uploads/2019/11/IMG_9903.jpg"
            alt=""
          />
        </Col>
        <Col md="6" lg="3" className="s3__box-item">
          <img
            src="https://infomercado.pe/wp-content/uploads/2019/11/IMG_9857.jpg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
    <style>{`
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
    
    `}</style>
  </section>
)