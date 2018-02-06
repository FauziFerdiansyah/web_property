import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

// IMPORT NAVBAR
import Navbar from './elements/Navbar';
import SliderBanner from './elements/slider-header-top';
import FormSearchBanner from './elements/form-search-header-top';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Navbar # Element */}
        <Navbar />
        {/* Content Header Top */}
        <section className="section sct">
          <div className="container">
            <div className="columns">
              <div className="column is-6">
              <SliderBanner />
              </div>
              <div className="column is-6">
              <FormSearchBanner />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
