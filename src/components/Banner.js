import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import programmer from "../assets/img/programmer.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(1000 - Math.random() * 1000);
	const [index, setIndex] = useState(1);
	const toRotate = [
		"Web Developer",
		"FrontEnd Developer",
		"MERN Stack Developer",
	];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="aligh-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__fadeIn"
											: ""
									}>
									<span className="tagline">
										Welcome to my Portfolio
									</span>
									<h1>
										{`Hi! I'm AP00RV, `}{" "}
										<span
											className="txt-rotate"
											dataperiod="1000"
											data-rotate='[ "Web Developer", "FrontEnd Developer", "MERN Stack Developer" ]'>
											<span className="wrap">{text}</span>
										</span>
									</h1>
									<p>
										As an intermediate web developer, I have
										acquired a solid foundation in various
										programming languages and web
										development tools. My skillset includes
										proficiency in HTML, CSS, JavaScript,
										React, and Bootstrap, enabling me to
										create visually appealing and responsive
										websites. Additionally, I am well-versed
										in Google Firebase and MongoDB, which
										are essential tools for building
										scalable web applications.
									</p>
									<button
										onClick={() => console.log("connect")}>
										Let’s Connect{" "}
										<ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__zoomIn"
											: ""
									}>
									<img src={programmer} alt="Header Img" />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
