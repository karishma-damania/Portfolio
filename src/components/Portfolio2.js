import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
    return (
    	<div className="portfolio">
        <span>
			<h1 className="py-5">Portfolio</h1>
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-sm-6">
								<div className="box">
								<img className="portfolio-image" src= "https://user-images.githubusercontent.com/19628705/70381921-d3607180-1907-11ea-94f1-48bb7702494e.png"/>
								<h3> Project 1 </h3>
								</div>	
								</div>
				<div className="col-xl-3 col-sm-6">
		<div className="box">
		<img className="portfolio-image" src= "https://cdn.dribbble.com/users/517584/screenshots/11113318/media/62f8e3f6b6ed7142535070533aa94b1f.png?compress=1&resize=400x300"/>

		<h3> Project 2 </h3>
	
		</div>
		</div>
				<div className="col-xl-3 col-sm-6">
		<div className="box">
		<img className="portfolio-image" src= "https://themes.getbootstrap.com/wp-content/uploads/2018/05/front-preview-screenshot1.jpg"/>

		<h3> Project 3 </h3>
		
		</div>
		</div>
				<div className="col-xl-3 col-sm-6">
		<div className="box">
		<img className="portfolio-image" src= "https://i.pinimg.com/originals/c5/78/1d/c5781d72c1298dc869b74702b4ee42a0.png"/>
		<h3> Project 4 </h3>
		
		</div>
		</div>
		</div>
		</div>
		</span>	
		</div>
    )
}

export default Portfolio