import React from "react";
import author from "../me.jpg";

const imageStyle = {
	height: "25rem",
	width: "25rem"
}

const AboutMe = () => {
        return (
                <div className = "container py-5">
		<div className="row">
		<div className="image-container col-lg-6 col-xm-12">
		<div className="photo-wrap mb-5">
		<img className="profile-img" style= {imageStyle} src={author} alt="author..."/>
		</div>
		</div>
		<div className="col-lg-6 col-xm-12">
		<h1 className="heading">About Me</h1>
		<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

		Aenean vel consectetur sapien, ac rutrum tortor. Fusce urna mauris, pulvinar ac ligula at, dictum varius orci. Proin non vehicula est. Mauris porta dui eget vulputate egestas. Vivamus finibus ex vel sollicitudin efficitur. Sed sed nisi tortor. Cras feugiat sit amet neque id fringilla. Praesent dignissim egestas nulla nec imperdiet. Morbi dapibus imperdiet posuere. Etiam a ornare mi, accumsan ornare est. Quisque vitae massa quis nisi auctor tristique. Vestibulum tellus nibh, efficitur sed lectus sit amet, facilisis malesuada nibh. Aenean posuere finibus lectus a bibendum. Quisque rutrum sed nulla ac sollicitudin.
</p>

</div>
		</div>
		</div>
	)
}

export default AboutMe;