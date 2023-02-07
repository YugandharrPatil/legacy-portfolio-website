const Skills = () => {
	return (
		<div>
			<h1 id="skills" className="subHeading">
				Skills
			</h1>
			<div className="accordion accordion-flush" id="accordionFlushExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="flush-headingOne">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseOne"
							aria-expanded="false"
							aria-controls="flush-collapseOne"
						>
							Web Development Technologies
						</button>
					</h2>
					<div
						id="flush-collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="flush-headingOne"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							<h2 className="accordionSubheading my-3">Frontend</h2>
							<div className="cardContainer">
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/html.png`} alt="" />
									<p className="skillName">HTML</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/css.png`} alt="" />
									<p className="skillName">CSS</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/js.png`} alt="" />
									<p className="skillName">JavaScript</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/bootstrap.png`} alt="" />
									<p className="skillName">Bootstrap</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/sass.png`} alt="" />
									<p className="skillName">Sass</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/react.png`} alt="" />
									<p className="skillName">ReactJs</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
							</div>
							<h2 className="accordionSubheading mt-4 mb-3">Backend</h2>
							<div className="cardContainer">
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/node.png`} alt="" />
									<p className="skillName">NodeJs</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/express.png`} alt="" />
									<p className="skillName">ExpressJs</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/rest.png`} alt="" />
									<p className="skillName">RESTful API</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/postgres.png`} alt="" />
									<p className="skillName postgres">Postgres SQL</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/mongodb.png`} alt="" />
									<p className="skillName">MongoDB</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="flush-headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseTwo"
							aria-expanded="false"
							aria-controls="flush-collapseTwo"
						>
							Mobile App Development Technologies
						</button>
					</h2>
					<div
						id="flush-collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="flush-headingTwo"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							<div className="cardContainer">
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/flutter.png`} alt="" />
									<p className="skillName">Flutter</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/react.png`} alt="" />
									<p className="skillName">React Native</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="flush-headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseThree"
							aria-expanded="false"
							aria-controls="flush-collapseThree"
						>
							Blockchain Development Technologies
						</button>
					</h2>
					<div
						id="flush-collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="flush-headingThree"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							<div className="cardContainer">
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/solidity.png`} alt="" />
									<p className="skillName">Solidity</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/truffle.png`} alt="" />
									<p className="skillName">Truffle</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/ganache.png`} alt="" />
									<p className="skillName">Ganache</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/w3js.jpg`} alt="" />
									<p className="skillName">w3Js</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/metamask.png`} alt="" />
									<p className="skillName">w3 Wallets</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header" id="flush-headingFour">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseFour"
							aria-expanded="false"
							aria-controls="flush-collapseFour"
						>
							Programming Languages
						</button>
					</h2>
					<div
						id="flush-collapseFour"
						className="accordion-collapse collapse"
						aria-labelledby="flush-headingFour"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							<div className="cardContainer">
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/C.png`} alt="" />
									<p className="skillName">C</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/cpp.png`} alt="" />
									<p className="skillName">C++</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/csharp.png`} alt="" />
									<p className="skillName">C#</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/js.png`} alt="" />
									<p className="skillName">JavaScript</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/python.png`} alt="" />
									<p className="skillName">Python</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
								<div className="skillCard">
									<img className="skillIcon" src={`${process.env.PUBLIC_URL}/images/solidity.png`} alt="" />
									<p className="skillName">Solidity</p>
									<div className="stars">
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star fillStar"></i>
										<i class="fa-solid fa-star noFillStar"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
