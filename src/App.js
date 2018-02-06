import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

// IMPORT NAVBAR
import Navbar from './elements/Navbar';
import SliderBanner from './elements/slider-header-top';
import FormSearchBanner from './elements/form-search-header-top';
import RecomendationBox from './elements/recomendation-content-box';
import Footer from './elements/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Navbar # Element */}
        <Navbar />

        {/* Content Header Top */}
        <div className="mb50">
          <section className="section sct bgimg-1">
            <div className="container">
              <div className="columns">
                <div className="column is-6">
                {/* Slider Banner # Element */}
                <SliderBanner />
                </div>
                <div className="column is-6">
                {/* Form Search Banner # Element */}
                <FormSearchBanner />
                </div>
              </div>
            </div>
          </section>

        {/* Content Recommendation # Element */}
        <RecomendationBox />
        </div>
        {/* Footer # Element */}
        <Footer />
      </div>
    );
  }
}

export default App;
