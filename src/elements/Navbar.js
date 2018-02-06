import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../logo.png'

class Navbar extends Component {
	render() {
		return (
			<nav id="nav-main" className="navbar nav-default is-fixed-top">
				<div className="container">
					<div className="navbar-brand">
						<a className="navbar-item">
						<img src={logo} alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
						</a>
						<div className="navbar-burger burger" data-target="menuMain">
						<span></span>
						<span></span>
						<span></span>
						</div>
					</div>

					<div id="menuMain" className="navbar-menu">
						<div className="navbar-start">
							<NavLink className="navbar-item" to="/">
								HOME
							</NavLink>
						</div>
						<div className="navbar-end">
							<div className="navbar-item">
								<div className="field is-grouped">
								<p className="control">
									<a className="button is-light" href="#.">
									<span className="icon">
										<i className="icon ion-images"></i>
									</span>
									<span>
										Pasang Iklan
									</span>
									</a>
								</p>
								<p className="control">
									<a className="button is-def is-outlined" href="#.">
									<span className="icon">
										<i className="icon ion-person"></i>
									</span>
									<span>Akun</span>
									</a>
								</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		)
	}

}
export default withRouter(Navbar);