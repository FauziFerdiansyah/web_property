import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { SimpleImg } from 'react-simple-img';

class RecomendationBox extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			options: {
				lazyLoad: true,
				navText: false,
				navText:['<i class="ion-chevron-left"></i>','<i class="ion-chevron-right"></i>'],
				margin:10,
				nav:true,
				dots:false,
				autoplay:false,
				// autoplayTimeout:3000,
				responsive:{
					0:{
						items:1
					},
					468:{
						items:2
					},
					769:{
						items:3
					},
					1024:{
						items:4
					}
				}
			},
			items: [
				<div className="column" key={1}>
					<div className="card slide-card-img">
						<div className="card-image">
							<figure className="image is-4by3">
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/07/single-property-01-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-rent">Sewa</div>
							<h6>Lorem ipsum dolor sit amet 1</h6>
							</div>
						</div>
					</div>
				</div>,
				<div className="column" key={2}>
					<div className="card slide-card-img">
						<div className="card-image">
							<figure className="image is-4by3">
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/08/Depositphotos_36853527_l-2015-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-sale">Jual</div>
							<h6>Lorem ipsum dolor sit amet 2</h6>
							</div>
						</div>
					</div>
				</div>,
				<div className="column" key={3}>
					<div className="card slide-card-img">
						<div className="card-image">
							<figure className="image is-4by3">
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/08/Depositphotos_12097604_l-2015-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-sale">Jual</div>
							<h6>Lorem ipsum dolor sit amet 3</h6>
							</div>
						</div>
					</div>
				</div>,
				<div className="column" key={4}>
					<div className="card slide-card-img">
						<div className="card-image">
							<figure className="image is-4by3">
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/08/Depositphotos_137006638_l-2015-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-rent">Sewa</div>
							<h6>Lorem ipsum dolor sit amet 4</h6>
							</div>
						</div>
					</div>
				</div>,
				<div className="column" key={5}>
					<div className="card slide-card-img">
						<div className="card-image">
							<figure className="image is-4by3">
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/08/Depositphotos_22295185_l-2015-1-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-rent">Sewa</div>
							<h6>Lorem ipsum dolor sit amet 5</h6>
							</div>
						</div>
					</div>
				</div>,
				<div className="column" key={6}>
					<div className="card slide-card-img">
						<div className="card-image">
							<figure className="image is-4by3">
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/07/Depositphotos_128177110_l-2015-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-sale">Jual</div>
							<h6>Lorem ipsum dolor sit amet 6</h6>
							</div>
						</div>
					</div>
				</div>
			],
	
		};
	}
	render() {
		return (
				<section className="section sct bg1">
				<div className="container">
					<h6 className="title is-6 page-header">Rekomendasi</h6>
						<div className="columns is-variable is-1">
						<OwlCarousel
							ref={inst => this.slider = inst}
							className="owl-theme"
							{...this.state.options}
						>
							{this.state.items}
						</OwlCarousel>
						</div>
				</div>
				</section>
		)
	}
}
export default RecomendationBox;