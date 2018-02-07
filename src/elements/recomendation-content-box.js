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
							<div className="box-info-price">Rp. 440.000.000</div>
							<div className="box-info-type">Vila</div>
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/07/single-property-01-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-rent">Sewa</div>
							<h6 title="Meridian Riverside Villa Penelope">Meridian Riverside Villa Penelope</h6>
								<div className="info-box-devider">
									<div className="info-box">Luas Tanah : 158 m²</div>
									<div className="info-box">Luas Bangunan : 220 m²</div>
								</div>
							</div>
						</div>
					</div>
				</div>,
				<div className="column" key={2}>
					<div className="card slide-card-img">
						<div className="card-image">
							<figure className="image is-4by3">
							<div className="box-info-price">Rp. 550.000.000</div>
							<div className="box-info-type">Vila</div>
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/08/Depositphotos_36853527_l-2015-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-sale">Jual</div>
							<h6 title="Pine Tree Villas">Pine Tree Villas</h6>
								<div className="info-box-devider">
									<div className="info-box">Luas Tanah : 400 m²</div>
									<div className="info-box">Luas Bangunan : 540 m²</div>
								</div>
							</div>
						</div>
					</div>
				</div>,
				<div className="column" key={3}>
					<div className="card slide-card-img">
						<div className="card-image">
							<figure className="image is-4by3">
							<div className="box-info-price">Rp. 190.000.000</div>
							<div className="box-info-type">Rumah</div>
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/08/Depositphotos_12097604_l-2015-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-sale">Jual</div>
							<h6 title="Eagle Willies Home">Eagle Willies Home</h6>
								<div className="info-box-devider">
									<div className="info-box">Luas Tanah : 208 m²</div>
									<div className="info-box">Luas Bangunan : 200 m²</div>
								</div>
							</div>
						</div>
					</div>
				</div>,
				<div className="column" key={4}>
					<div className="card slide-card-img">
						<div className="card-image">
							<figure className="image is-4by3">
							<div className="box-info-price">Rp. 160.000.000</div>
							<div className="box-info-type">Rumah</div>
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/08/Depositphotos_137006638_l-2015-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-rent">Sewa</div>
							<h6 title="8542 El Paseo Grande">8542 El Paseo Grande</h6>
								<div className="info-box-devider">
									<div className="info-box">Luas Tanah : 650 m²</div>
									<div className="info-box">Luas Bangunan : 500 m²</div>
								</div>
							</div>
						</div>
					</div>
				</div>,
				<div className="column" key={5}>
					<div className="card slide-card-img">
						<div className="card-image">
							<figure className="image is-4by3">
							<div className="box-info-price">Rp. 250.000.000</div>
							<div className="box-info-type">Rumah</div>
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/08/Depositphotos_22295185_l-2015-1-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-rent">Sewa</div>
							<h6 title="Downtown Penthouse">Downtown Penthouse</h6>
								<div className="info-box-devider">
									<div className="info-box">Luas Tanah : 200 m²</div>
									<div className="info-box">Luas Bangunan : 300 m²</div>
								</div>
							</div>
						</div>
					</div>
				</div>,
				<div className="column" key={6}>
					<div className="card slide-card-img">
						<div className="card-image">
							<figure className="image is-4by3">
							<div className="box-info-price">Rp. 1.500.000.000</div>
							<div className="box-info-type">Vila</div>
								<SimpleImg height="100%" img-lazy placeholder={"linear-gradient(rgba(255, 186, 77, 0.37) 0%, rgba(249, 250, 251, 0.1) 100%)"} width="100%" src="https://findeo.realty/wp-content/uploads/2017/07/Depositphotos_128177110_l-2015-520x397.jpg" alt="Placeholder image" />
							</figure>
						</div>
						<div className="card-content">
							<div className="content">
							<div className="label-sale is-sale">Jual</div>
							<h6 title="City View Loft Villa">City View Loft Villa</h6>
								<div className="info-box-devider">
									<div className="info-box">Luas Tanah : 600 m²</div>
									<div className="info-box">Luas Bangunan : 550 m²</div>
								</div>
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
					<h6 className="title is-6 page-header">Rekomendasi Terbaru Minggu Ini</h6>
						<div className="columns is-variable is-1">
						<OwlCarousel
							ref={inst => this.slider = inst}
							className="owl-theme owl-boxs"
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