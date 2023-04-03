import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import githubLogo from "../assets/img/githubLogo.svg";
import instagramLogo from "../assets/img/instagramLogo.svg";
import linkedinLogo from "../assets/img/linkedinLogo.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<MailchimpForm />
					<Col size={12} sm={6}>
						{/* <img src={logo} alt="Logo" /> */}
						<span className="navLogo">
							Port<span className="navLogo1">Folio</span>
						</span>
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a
								href="https://www.linkedin.com/in/ap00rv13/"
								target="_blank">
								<img src={linkedinLogo} alt="" />
							</a>
							<a
								href="https://www.instagram.com/ap00rv.13/"
								target="_blank">
								<img src={instagramLogo} alt="" />
							</a>
							<a
								href="https://github.com/Ap0000rv"
								target="_blank">
								<img src={githubLogo} alt="" />
							</a>
						</div>
						<p>Copyright 2023. All Rights Reserved</p>
					</Col>
				</Row>
				<h5 style={{ textAlign: "center" }}>Made with ❤️ By AP00RV</h5>
			</Container>
		</footer>
	);
};
