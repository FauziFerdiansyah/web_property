import React, { Component } from 'react';

class FormSearchBanner extends Component {
	render() {
		return (
			<div className="content-side-header">
				<form>
				<h5 className="title is-5"><i className="icon ion-icon icon ion-earth"></i>Situs properti terbaik se-Indonesia</h5>
					<div className="field has-addons">
					<div className="control is-expanded">
						<input className="input inp_cst" type="text" placeholder="Enter city e.g. Jakarta"/>
					</div>
					<div className="control">
						<a className="button is-def">
						Cari
						</a>
					</div>
					</div>
					<div className="field is-grouped is-grouped-left">
					<div className="control">
						<div className="select">
						<select className="inp_cst">
							<option value="jual">Jual</option>
							<option value="sewa">Sewa</option>
						</select>
						</div>
					</div>
					<div className="control">
						<div className="select">
						<select className="inp_cst">
							<option value="hs">Rumah</option>
							<option value="apr">Apartemen</option>
							<option value="vil">Vila</option>
							<option value="tan">Tanah</option>
						</select>
						</div>
					</div>
						
					
					</div>
					<div className="control">
						<div className="dropdown-cst closed-detail" data-hasclick="0" id="openDetail">
						<div className="dropdown-trigger">
							<div className="button div-btn" aria-haspopup="true" aria-controls="dropdown-menu2">
							<span><i className="icon ion-android-add-circle"> </i> Opsi Lain</span>
							<span className="icon is-small">
								<i className="fas fa-angle-down" aria-hidden="true"></i>
							</span>
							</div>
						</div>
						<div className="dropdown-menu" id="dropdown-menu2" role="menu">
							<div className="dropdown-content">
							<i className="icon ion-ios-close cls-dropdown-detail"> </i>
							<label className="label is-small has-text-centered">Harga</label>
							<hr className="dropdown-divider"/>
							<div className="dropdown-item">
								<div className="field">
								<div className="control has-icons-left">
									<input className="input inp_cst is-small w-ico" type="text" placeholder="Harga (Rp.)"/>
									<span className="icon is-small is-left ico-txt">
									Min
									</span>
								</div>
								</div>
							</div>
							<div className="dropdown-item">
								<div className="field">
								<div className="control has-icons-left">
									<input className="input inp_cst is-small w-ico" type="text" placeholder="Harga (Rp.)"/>
									<span className="icon is-small is-left ico-txt">
									Max
									</span>
								</div>
								</div>
							</div>
							<hr className="dropdown-divider"/>
							<label className="label is-small has-text-centered">Luas Tanah</label>
							<hr className="dropdown-divider"/>
								<div className="dropdown-item">
								<div className="field">
									<div className="control has-icons-left">
									<input className="input inp_cst is-small w-ico" type="text" placeholder="Luas (m²)"/>
									<span className="icon is-small is-left ico-txt">
										Min
									</span>
									</div>
								</div>
								</div>
								<div className="dropdown-item">
								<div className="field">
									<div className="control has-icons-left">
									<input className="input inp_cst is-small w-ico" type="text" placeholder="Luas (m²)"/>
										<span className="icon is-small is-left ico-txt">
										Max
									</span>
									</div>
								</div>
								</div>
							</div>
						</div>
						</div>   
					</div>  
				</form>
			</div>
		);
	}
}
export default FormSearchBanner;