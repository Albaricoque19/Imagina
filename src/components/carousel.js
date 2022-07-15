import React, { Component } from 'react'
import { Container } from 'reactstrap'
export default class extends Component {
  componentDidMount() {
    $('.owl-carousel').owlCarousel({
      items: 4,
      autoplay: true,
      loop: true,
      margin: 30,
      dots: true,
      responsiveClass: true,
      responsive: {
        320: { items: 1 },
        480: { items: 2 },
        600: { items: 2 },
        767: { items: 3 },
        768: { items: 3 },
        992: { items: 4 }
      }
    })
  }

  render() {
    return (
      <section className="s4">
        <Container>
          <div className="s4__titles">
            <h1>Imagina</h1>
            <h4>Imagina momentos inolvidables .</h4>
          </div>
          <div class="owl-carousel owl-theme">
            <div>
            <img
          src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGV2ZW50b3MlMjBjb3Jwb3JhdGl2b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
          className=""
          alt=""
        />
            </div>
            <div>
              <img
          src="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnRvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          className=""
          alt=""
        />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50b3MlMjBjb3Jwb3JhdGl2b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGV2ZW50b3MlMjBjb3Jwb3JhdGl2b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1564522365984-c08ed1f78893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGV2ZW50b3MlMjBjb3Jwb3JhdGl2b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1578261984699-4da3d64ce527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGV2ZW50b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576897953902-64db59a30f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxldmVudG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJvZGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1513725673171-537abba17912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGJvZGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                alt=""
              />
            </div>
          </div>
        </Container>

        <style>
          {`
           .s4 {
               font-size: 16px;
               margin-top: 10em;
           }
           .s4__titles {
               margin-bottom: 4em;
               text-align: center;
           }
           .s4__titles h1 {
               font-size: 3em;
               font-weight: 100;
               text-transform: capitalize;
               letter-spacing: 5px;
           }
           .s4__titles h4 {
               font-size: .9em;
               font-weight: 100;
               margin-top: 2em;
               color: #949090;
           }
            .owl-dots .owl-dot {
                outline: none;
            }
            .owl-dots .owl-dot.active span, .owl-dots .owl-dot:hover span {
                background: hsl(108, 47%, 57%) !important;
            }
            
            `}
        </style>
      </section>
    )
  }
}
