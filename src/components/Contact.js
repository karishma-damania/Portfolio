import React from 'react';

const Contact = () => {
	return (
		<div className="contacts">
		<div className="text-center">
	

		<h1> Contact Me </h1>
		<p>Fill out the form to describe your project and I will get back to you as soon as possible! </p>
	</div>
	<div className="container">
	<div className="row">
	<div className="col-md-6 col-xs-12">
		<div className="text-center">
			<input 
			id="name"
			type="text"
			className="form-control"
			placeholder="Name"
			name="name"
			/>
			<div className="line"> </div>
		</div>

		<div className="text-center">
			<input
			id="phone"
			type="text" 
			className="form-control"
			placeholder="Phone No."
			phone="phone"
			/>
			<div className="line"> </div>
		</div>

		<div className="text-center">
			<input 
			id="email"
			type="email"
			className="form-control"
			placeholder="Email"
			email="email"
			/>
			<div className="line"> </div>
		</div>

		<div className="text-center">
			<input 
			id="subject"
			type="text"
			className="form-control"
			placeholder="Subject"
			subject="subject"
			/>
			<div className="line"> </div>
		</div>
	</div>


	<div className="col-md-6 col-xs-12">
		<div className="text-center">
			<textarea
			id="description"
			type="text"
			className="form-control"
			placeholder="Description"
			></textarea>
			<div className="line"> </div>
		</div>
	</div>

	<button className="btn-main-offer contact-btn" type="submit">Submit</button>
	</div>
	</div>
	</div>

	)
}

export default Contact