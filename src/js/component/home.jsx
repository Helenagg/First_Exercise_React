import React from "react";
import ReactDom from "react-dom";
import propTypes from "prop-types";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		// <div className="text-center">
		// 	<h1 className="text-center mt-5">Hello Rigo!</h1>
		// 	<p>
		// 		<img src={rigoImage} />
		// 	</p>
		// 	<a href="#" className="btn btn-success">
		// 		If you see this green button... bootstrap is working...
		// 	</a>
		// 	<p>
		// 		Made by{" "}
		// 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
		// 		love!
		// 	</p>
		// </div>
		<div className="container">
			<Navbar title="Start Bootstrap" link1="Home" link2="About" link3="Services" link4="Contact"/>,
			<Jumbotron titleJumbo="A Warm Welcome!" textJumbo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." button="Call to action!"/>,
			<div className="d-flex">
				<Card image="https://media.istockphoto.com/photos/two-cats-in-smal-hammock-picture-id1010539662?k=20&m=1010539662&s=612x612&w=0&h=-EzVx6WgmfDkv5P6EjkShK89VI1Dl-eb3p-iLsxIha0=" cardTitle="Placidamente" cardText="If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated" cardButton="Find Out More!"/>,
				<Card image="https://media.istockphoto.com/photos/fat-cat-laying-on-back-picture-id642294404?k=20&m=642294404&s=612x612&w=0&h=Ar_CCyjIb6xIzy10-8JbSfgj-PdRw4cnw34EHEhYC6M=" cardTitle="Felicidad" cardText="If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated" cardButton="Find Out More!"/>,
				<Card image="https://media.istockphoto.com/photos/hungry-white-calico-tricolor-cat-licking-lips-waiting-for-food-picture-id1368035536?k=20&m=1368035536&s=612x612&w=0&h=6yKP0rUu304m9HqxkQuAfDo_feLCuZnr9hb8bruIwL4=" cardTitle="Umm Que rico" cardText="If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated" cardButton="Find Out More!"/>,
				<Card image="https://media.istockphoto.com/photos/hiding-cat-picture-id171309499?k=20&m=171309499&s=612x612&w=0&h=WVAl6XSyUj3E0bmhNBhmgGwl_tEu4iHu6A7I_gfPLHc=" cardTitle="Quien eres tú?" cardText="If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated" cardButton="Find Out More!"/>
			</div>
			<Footer footer="Copyright @ " footerLink="Helena González" footer2=" 2022"/>
		</div>
	);
};

export default Home;
