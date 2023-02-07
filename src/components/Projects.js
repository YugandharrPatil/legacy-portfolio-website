const Projects = () => {
	return (
		<div id="Projects">
			<h1 id="skillsHeading" className="subHeading">
				Projects
			</h1>

			<div id="carousel-control" class="carousel slide" data-ride="false">
				{/* <div class="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carousel-control"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button type="button" data-bs-target="#carousel-control" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carousel-control" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div> */}
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src={`${process.env.PUBLIC_URL}/images/mes3.png`} class="d-block carouselImage m-auto" alt="..." />
						<h5 className="projectDescription mt-2">
							Built the front-end of the registration portal for the annual flagship entrepreneurship summit MES at my college
						</h5>
					</div>
					<div class="carousel-item">
						<img src={`${process.env.PUBLIC_URL}/images/tindog.png`} class="d-block carouselImage m-auto" alt="..." />
						{/* <div class="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Some representative placeholder content for the second slide.</p>
						</div> */}
						<h5 className="projectDescription mt-2">A fictious dating site for dogs built using Bootstrap</h5>
					</div>
					{/* <div class="carousel-item"> */}
					{/* <img src={`${process.env.PUBLIC_URL}/images/mes.png`} class="d-block carouselImage m-auto" alt="..." /> */}
					{/* <div class="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>Some representative placeholder content for the third slide.</p>
						</div> */}
					{/* <h5 className="projectDescription mt-2">
							Built the front-end of the registration portal for the annual flagship entrepreneurship summit MES at my college
						</h5> */}
					{/* </div> */}
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carousel-control" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carousel-control" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
};

export default Projects;
