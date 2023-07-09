import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Studys = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Études"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./logo_webtech.png"
								alt="Webtech"
								className="work-image"
							/>
							<div className="work-title">Next-u WebTech</div>
							<div className="work-subtitle">
								Master - Manager de Projet
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./logo_webtech.png"
								alt="Webtech"
								className="work-image"
							/>
							<div className="work-title">Next-u WebTech</div>
							<div className="work-subtitle">
								Bachelor - Developpeur Web & Application 
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./logo_iut_bayonne.jpg"
								alt="Iut Bayonne"
								className="work-image"
							/>
							<div className="work-title">Licence pro multimedia</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - 2020</div>
						</div>

						<div className="work">
							<img
								src="./logo_iut_toulon.png"
								alt="Iut Toulon"
								className="work-image"
							/>
							<div className="work-title">DUT MMI</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2017 - 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Studys;
