import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiences"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./logo_cap6.png"
								alt="Cap6"
								className="work-image"
							/>
							<div className="work-title">Cap6</div>
							<div className="work-subtitle">
								Developpeur Web et application
							</div>
							<div className="work-duration">08/2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./logo_resinemedia.jpg"
								alt="Resine Media"
								className="work-image"
							/>
							<div className="work-title">Resine Media</div>
							<div className="work-subtitle">
							Création et maintenance de site web.<br/>
							Préstation audiovisuel
							</div>
							<div className="work-duration">10/2020 - 07/2021</div>
						</div>

						<div className="work">
							<img
								src="./logo_vokto.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Vokto</div>
							<div className="work-subtitle">
							Intervention pour de la mise en place<br/>
							et maintenance de réseaux informatique
							</div>
							<div className="work-duration">03/2018 - 04/2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
