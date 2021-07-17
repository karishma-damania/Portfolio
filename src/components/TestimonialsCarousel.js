import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const TestimonialsCarousel = () => {
	return (
		<Carousel 
		showArrows={true}
		infiniteLoop={true}
		showThumbs={false}
		showStatus={false}
		autoPlay={true}
		interval={3000} >
			<div>
			<img src="https://www.shareicon.net/data/2016/06/25/786536_people_512x512.png" alt=""/>
			<div className="myCarousel">
			<h3> Kenrick Vaz </h3>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
			</div>

			<div>
			<img src="https://image.flaticon.com/icons/png/512/186/186037.png" alt=""/>
			<div className="myCarousel">
			<h3> Sanjana Gupta </h3>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
			</div>

			<div>
			<img src="https://image.flaticon.com/icons/png/512/163/163833.png" alt=""/>
			<div className="myCarousel">
			<h3> Elma Elza Thomas </h3>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
			</div>

			<div>
			<img src="https://www.shareicon.net/data/2016/06/25/786551_people_512x512.png" alt=""/>
			<div className="myCarousel">
			<h3> Rohit Fluffy Sanjay </h3>
			<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
			</div>
		</Carousel>
	)
}

export default TestimonialsCarousel