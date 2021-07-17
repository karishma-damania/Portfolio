import React from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, LinkedinShareButton, LinkedinIcon} from "react-share";

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="d-flex">
							<p>A Place</p>
						</div>
						<div className="d-flex">
							<p>+971 56 123 4567</p>
						</div>
						<div className="d-flex">
							<p>anemail@gmail.com</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
								<a className="footer-nav">Home</a>
								<br/>
								<a className="footer-nav">About Me</a>
								<br/>
								<a className="footer-nav">Services</a>
								<br/>
							</div>
							<div className="col">
								<a className="footer-nav">Experience</a>
								<br/>
								<a className="footer-nav">Portfolio</a>
								<br/>
								<a className="footer-nav">Contact Me</a>
								<br/>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
						<div className="d-flex justify-content-center">
							<FacebookShareButton />
							<FacebookIcon className="mx-3" size={36}/>
							<TwitterShareButton />
							<TwitterIcon className="mx-3" size={36}/>
							<RedditShareButton />
							<RedditIcon className="mx-3" size={36}/>
							<LinkedinShareButton />
							<LinkedinIcon className="mx-3" size={36}/>
						</div>
						<p className="pt-3 text-center">Copyright&copy;{new Date().getFullYear()}&nbsp;Karishma Damania | All Rights Reserved
					</p>
					</div>
				</div>
			</div>			
		</div>
	)
}

export default Footer