import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import YoutubeThumbnail from "../assets/img/YoutubeThumbnail.png";
import houseMarketPlaceThumbnail from "../assets/img/houseMarketPlaceThumbnail.jpg";
import keepAppThumbnail from "../assets/img/keepAppThumbnail.jpg";
import minionImgThumbnail from "../assets/img/minionImgThumbnail.jpg";
import ecommerceThumbnail from "../assets/img/ecommerceThumbnail.jpg";
import contactThumbnail from "../assets/img/contactThumbnail.png";
import portfolioThumbnail from "../assets/img/portfolioThumbnail.png";
import chatAppThumbnail from "../assets/img/chatAppThumbnail.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
	const projects1 = [
		{
			title: "MeTube",
			description: "YouTube Clone",
			imgUrl: YoutubeThumbnail,
			Url: "https://youtube-clone-ap0000rv.vercel.app/",
		},
		{
			title: "House Market Place",
			description: "Buy/Rent your House",
			imgUrl: houseMarketPlaceThumbnail,
			Url: "https://house-market-place-ap0000rv.vercel.app/",
		},
		{
			title: "PortFolio",
			description: "Personal portfolio",
			imgUrl: portfolioThumbnail,
			Url: "https://portfolio-ap0000rv.vercel.app/",
		},
	];
	const projects2 = [
		{
			title: "Minion Talks",
			description: "Convert to minions language",
			imgUrl: minionImgThumbnail,
			Url: "https://minions-banana-talk-translator.netlify.app/",
		},
		{
			title: "Cheap Store",
			description: "ECommerce Landing page",
			imgUrl: ecommerceThumbnail,
			Url: "https://react-redux-app-qhk8.vercel.app/",
		},
		{
			title: "Keep Notes",
			description: "Google Keep clone",
			imgUrl: keepAppThumbnail,
			Url: "https://github.com/Ap0000rv/GoogleKeepClone-React",
		},
	];
	const projects3 = [
		{
			title: "Contact App",
			description: "save your Contacts",
			imgUrl: contactThumbnail,
			Url: "https://github.com/Ap0000rv/Contact-App",
		},
		{
			title: "Chat App",
			description: "chatting app",
			imgUrl: chatAppThumbnail,
			Url: "https://github.com/Ap0000rv/chatApp",
		},
		{
			title: "PortFolio",
			description: "Know Me :)",
			imgUrl: projImg2,
			Url: "https://apoorv-portfolio.netlify.app/",
		},
	];

	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__fadeIn"
											: ""
									}>
									<h2>Projects</h2>
									<p>
										Some of my projects are mentioned here.
										Hope you like it :)
									</p>
									<Tab.Container
										id="projects-tabs"
										defaultActiveKey="first">
										<Nav
											variant="pills"
											className="nav-pills mb-5 justify-content-center align-items-center"
											id="pills-tab">
											<Nav.Item>
												<Nav.Link eventKey="first">
													Major Projects
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">
													Minor Projects
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="third">
													{" "}
													key Learnings
												</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id="slideInUp"
											className={
												isVisible
													? "animate__animated animate__slideInUp"
													: ""
											}>
											<Tab.Pane eventKey="first">
												<Row>
													{projects1.map(
														(project, index) => {
															return (
																<ProjectCard
																	key={index}
																	{...project}
																/>
															);
														}
													)}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<Row>
													{projects2.map(
														(project, index) => {
															return (
																<ProjectCard
																	key={index}
																	{...project}
																/>
															);
														}
													)}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<Row>
													{projects3.map(
														(project, index) => {
															return (
																<ProjectCard
																	key={index}
																	{...project}
																/>
															);
														}
													)}
												</Row>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	);
};
