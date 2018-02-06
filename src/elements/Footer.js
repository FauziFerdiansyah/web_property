import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
				<section className="section sct bgimg-1 pt60 pb80 sc-fot">
				<div className="ftop">
					<div className="ft-b-to-top" id="toTop"> <i className="ion-arrow-up-c"></i> Back to top</div>
				</div>
					<div className="container">
					<div className="columns section-footer">
						<div className="column is-4 ft-about">
						Explore the history of the classic Lorem Ipsum passage and generate your own text, sentences or paragraphs. Commonly used as placeholder text in the graphic and print industries.
						<div className="copyright">© 2018 All Right Reserved carihuni.com</div>
						</div>
						<div className="column is-2">
						<div className="tfot">Links</div>
						<ul className="ft-ul-link">
							<li>
							<a>Home</a>
							</li>
							<li>
							<a>Accommondation</a>
							</li>
							<li>
							<a>Special Offer</a>
							</li>
						</ul>
						</div>
						<div className="column is-2">
						<div className="tfot">About Us</div>
						<ul className="ft-ul-link">
							<li>
							<a>About Us</a>
							</li>
							<li>
							<a>Blog</a>
							</li>
							<li>
							<a>Contact Us</a>
							</li>
							<li>
							<a>Log In</a>
							</li>
							<li>
							<a>Sign Up</a>
							</li>
						</ul>  
						</div>
						<div className="column is-4">
						<div className="tfot">Contact Us</div>
						Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat. 
						<div className="ft-info columns">
						<a className="ft-tel column" href="tel:021456789">021 - 456 789</a>
						<a className="ft-mail column" href="mailto:info@carihuni.com">info@carihuni.com</a>
						</div>
						<div className="ft-social">
						<i className="f-ic ion-social-facebook facebook"></i>
						<i className="f-ic ion-social-twitter twitter"></i>
						<i className="f-ic ion-social-googleplus gplus"></i>
						</div>
						</div>
					</div>
					</div>
				</section>
		);
	}
}
export default Footer;