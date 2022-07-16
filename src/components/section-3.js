import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default () => ( <
    section className = "s3" >
    <
    Container >
    <
    div className = "s3__titles" >
    <
    h1 > Galeria. < /h1>

    <
    /div> <
    Row className = "s3__box-wrapper" >
    <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://img4.evepla.com/917/888/428219019178883.jpg"
    alt = "" /
    >
    <
    h3 > Foto 1 < /h3> <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "http://guiamexico.com.mx/Imagenes/b/207704931-1-chikids-jardin-de-eventos-infantiles.jpeg"
    alt = "" /
    >
    <
    h3 > Foto 2 < /h3> <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://www.produccioneschiquichiqui.com/wp-content/uploads/POW-PETROL.png"
    alt = "" /
    >
    <
    h3 > Foto 3 < /h3>

    <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://www.bubalina.com/wp-content/uploads/2018/04/1-68.jpg"
    alt = "" /
    >
    <
    h3 > Foto 4 < /h3>

    <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEUAAAAVFRUrKytAQEBVVVVqamqVlZWqqqq/v7+AgIDU1NTq6upYWFgQEBCZmZkeHh7Gxsbb29uwsLAKCgrz8/MmJiYzMzNeXl56enpQUFCHh4dvb28jIyM0NDRFRUVoaGg7Ozu4uLiPj4/Ozs6GhoagoKDi4uKTn9M1AAAE70lEQVR4nO3c6XaqMBQFYJkElKkikyhah/v+j3ghgOR4WwfkNpTs71dLrStrr5NDEmxnMwAAAAAAAAAAAAAAAAAAAAAAAAAAAPi9MsNwQtGD+BXCjRVU5lvRIxm/+DOwmMDKRI9l7FyrE2j8D4pCETaqkfICLq3V9fLe+ihZqcCRjc+Oz8oKkuby58eC+bBQXZ2UhGV59dWgyap0csUOUDC1KHbXb+YkK8tkF70uq8WHKWqcI+BcViUzbZZVHg2LNa2Iy6pMS7v3dpM2X5nMyqwzOAb/VpZNw5oLHbBAXpNVFRebi3va4M/VNXNBfIodsjB5l5VpXtglUljBobq0omFZIkcsEJ+VuXKqSzlXWkE941BZFZ2GdWQXu1Vp0KxJN7RneQJHLFBKwjKbRcEmqOMK2lRiGpakO0abhtVubg7HT8v69LpQTH6dtfr6vSYvp2Fdup8odFdz4iqrObg5pPOj84NjFS6jPWvz7Qt9q90bnmJ2QT+tK8vjTw11BOgsvNeM0lN16nBq8jyul7X14kfGOQp7vrQe3OWiJFGbL89tVnKlteHSevoUedtlVaYl0e7HXtVxrS7q4xc3LnxYy+V/HN3YFMfq1OGyf+FX/pCs1snj3/jNoiRNU+d6irdVX3rsFS5pWN/fRCfATS8e80o1cXw6C9dTXj5s59685p37vcNNZdnDjm9Ujm1WZVr9HtacaFiHYcc3JvsuqzKtos9bpGQenoYe4YjMeV6/KbTgC0sfeIAjsvNIWvNeH/+IJGnvGQ3Le34pylNP9UxcLyf9iFofJKzZLLf+rJeLiz/o4MbmdhrK/Xz5kSEavDSM95cO8gj5RSkK6wG12+5Megs8DMWu99FeLnokv0K8T+00mfZtHwBAPsU+z/MMHzp+gmaf7dL5POFjqKFkLCoWV8/HFfKIr1mVaUn1GZgeUptzxqr0nt2ZhIXSukcnYdnYG96TkKzsSZ+fvw1hvSDDNHxeRBu8pJ/RflZOKgt/X3+Xzy9K339YEbquG0438via1ebtSegqjSEGNkp+fj5X++h09/i19ymd6RZXlCWJHr/9Ni4X1nRraxghn5WCDwHcRQoLpXUfzWrCXaviFomR753evUumsHZGLU/6zaBQorC03Gjt+zVnecKKuqwMo99fk8jT4BMuKyPvtTyVZung84U1SGkNPMAxOdCwjH7vIkfHmmk0K6PnJAqnPwdn5F7Yo7K4M5mJH9EwKg3rlUfTSqSWttMuJooW1vOHgCGLqiLR89mCL6386TIJ1Y5E/8OUW2jlh+aaEkUP2k/EhaVOeblwI2lrK2/+Kd1Od0rZvY21ohI/Ms5x0PZ5Xu2jI/adkjk642TfV9eWhiVRaZWTSisOTZ929Q59jsEvDGhWMvV4onC6sJzu5ujHWiluSwhhVXwuqzKtNpy40JiiaU8Iq3KgYTWnEAetVdRtX+ae1cl0op6HscZhtwF574a8r8JyNYK9jqyzJJ2FX4al0rDYgt3lsorEDlmcm57FOtSBhlV3LRdZ3d4N2V7xJqz26Nmvo5K0uTNknVX3py8rq1IdYYka5yiEXNdqVvAxDUvWe99XwuvesF2/+zQsmU77Hoszx3H0rKsgMg/f/jDX1IS+zzcjhQ9L7i71BB+T8AVhjOb+Cn+7lXVbAwAAAAAAAAAAAAAAAAAAAAAAAAAAMA1/AVxOVvG6/LWYAAAAAElFTkSuQmCC"
    alt = "" /
    >
    <
    h3 > Foto 5 < /h3>

    <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEUAAAAVFRUrKytAQEBVVVVqamqVlZWqqqq/v7+AgIDU1NTq6upYWFgQEBCZmZkeHh7Gxsbb29uwsLAKCgrz8/MmJiYzMzNeXl56enpQUFCHh4dvb28jIyM0NDRFRUVoaGg7Ozu4uLiPj4/Ozs6GhoagoKDi4uKTn9M1AAAE70lEQVR4nO3c6XaqMBQFYJkElKkikyhah/v+j3ghgOR4WwfkNpTs71dLrStrr5NDEmxnMwAAAAAAAAAAAAAAAAAAAAAAAAAAAPi9MsNwQtGD+BXCjRVU5lvRIxm/+DOwmMDKRI9l7FyrE2j8D4pCETaqkfICLq3V9fLe+ihZqcCRjc+Oz8oKkuby58eC+bBQXZ2UhGV59dWgyap0csUOUDC1KHbXb+YkK8tkF70uq8WHKWqcI+BcViUzbZZVHg2LNa2Iy6pMS7v3dpM2X5nMyqwzOAb/VpZNw5oLHbBAXpNVFRebi3va4M/VNXNBfIodsjB5l5VpXtglUljBobq0omFZIkcsEJ+VuXKqSzlXWkE941BZFZ2GdWQXu1Vp0KxJN7RneQJHLFBKwjKbRcEmqOMK2lRiGpakO0abhtVubg7HT8v69LpQTH6dtfr6vSYvp2Fdup8odFdz4iqrObg5pPOj84NjFS6jPWvz7Qt9q90bnmJ2QT+tK8vjTw11BOgsvNeM0lN16nBq8jyul7X14kfGOQp7vrQe3OWiJFGbL89tVnKlteHSevoUedtlVaYl0e7HXtVxrS7q4xc3LnxYy+V/HN3YFMfq1OGyf+FX/pCs1snj3/jNoiRNU+d6irdVX3rsFS5pWN/fRCfATS8e80o1cXw6C9dTXj5s59685p37vcNNZdnDjm9Ujm1WZVr9HtacaFiHYcc3JvsuqzKtos9bpGQenoYe4YjMeV6/KbTgC0sfeIAjsvNIWvNeH/+IJGnvGQ3Le34pylNP9UxcLyf9iFofJKzZLLf+rJeLiz/o4MbmdhrK/Xz5kSEavDSM95cO8gj5RSkK6wG12+5Megs8DMWu99FeLnokv0K8T+00mfZtHwBAPsU+z/MMHzp+gmaf7dL5POFjqKFkLCoWV8/HFfKIr1mVaUn1GZgeUptzxqr0nt2ZhIXSukcnYdnYG96TkKzsSZ+fvw1hvSDDNHxeRBu8pJ/RflZOKgt/X3+Xzy9K339YEbquG0438via1ebtSegqjSEGNkp+fj5X++h09/i19ymd6RZXlCWJHr/9Ni4X1nRraxghn5WCDwHcRQoLpXUfzWrCXaviFomR753evUumsHZGLU/6zaBQorC03Gjt+zVnecKKuqwMo99fk8jT4BMuKyPvtTyVZung84U1SGkNPMAxOdCwjH7vIkfHmmk0K6PnJAqnPwdn5F7Yo7K4M5mJH9EwKg3rlUfTSqSWttMuJooW1vOHgCGLqiLR89mCL6386TIJ1Y5E/8OUW2jlh+aaEkUP2k/EhaVOeblwI2lrK2/+Kd1Od0rZvY21ohI/Ms5x0PZ5Xu2jI/adkjk642TfV9eWhiVRaZWTSisOTZ929Q59jsEvDGhWMvV4onC6sJzu5ujHWiluSwhhVXwuqzKtNpy40JiiaU8Iq3KgYTWnEAetVdRtX+ae1cl0op6HscZhtwF574a8r8JyNYK9jqyzJJ2FX4al0rDYgt3lsorEDlmcm57FOtSBhlV3LRdZ3d4N2V7xJqz26Nmvo5K0uTNknVX3py8rq1IdYYka5yiEXNdqVvAxDUvWe99XwuvesF2/+zQsmU77Hoszx3H0rKsgMg/f/jDX1IS+zzcjhQ9L7i71BB+T8AVhjOb+Cn+7lXVbAwAAAAAAAAAAAAAAAAAAAAAAAAAAMA1/AVxOVvG6/LWYAAAAAElFTkSuQmCC"
    alt = "" /
    >
    <
    h3 > Foto 6 < /h3> <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://infomercado.pe/wp-content/uploads/2019/11/IMG_9903.jpg"
    alt = "" /
    >
    <
    h3 > Foto 7 < /h3>

    <
    /Col> <
    Col md = "6"
    lg = "3"
    className = "s3__box-item" >
    <
    img src = "https://infomercado.pe/wp-content/uploads/2019/11/IMG_9857.jpg"
    alt = "" /
    >
    <
    h3 > Foto 8 < /h3>

    <
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
        width: 200px;
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