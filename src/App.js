import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

// IMPORT NAVBAR
import Navbar from './elements/Navbar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
            loop: true,
            navText: false,
            navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],
            margin:10,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                769:{
                    items:1
                },
                1024:{
                    items:1
                }
            }
        },
        items: [
            <div className="item" key={1}>
              <img src="https://florinn.github.io/react-owl-carousel2/public/img/fullimage1.jpg"/>
            </div>,
            <div className="item" key={2}>
              <img src="https://florinn.github.io/react-owl-carousel2/public/img/fullimage2.jpg"/>
            </div>,
            <div className="item" key={3}>
              <img src="https://florinn.github.io/react-owl-carousel2/public/img/fullimage3.jpg"/>
            </div>,
            <div className="item" key={4}>
              <img src="https://florinn.github.io/react-owl-carousel2/public/img/fullimage1.jpg"/>
            </div>,
            <div className="item" key={5}>
              <img src="https://florinn.github.io/react-owl-carousel2/public/img/fullimage2.jpg"/>
            </div>,
            <div className="item" key={6}>
              <img src="https://florinn.github.io/react-owl-carousel2/public/img/fullimage3.jpg"/>
            </div>,
        ],

    };
  }
  render() {
    return (
      <div className="App">
        <Navbar />

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-9">
              <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
    document.getElementsByClassName("owl-prev").innerHTML = '<i class="ion-chevron-left"></i>';
    document.getElementsByClassName("owl-next").innerHTML = '<i class="ion-chevron-right"></i>';
  }
}

export default App;
