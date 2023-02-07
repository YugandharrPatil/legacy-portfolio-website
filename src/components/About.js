export const About = () => {
	return (
		<div className="mt-5">
			<div class="row gx-5">
				<div class="col-lg-6 order-lg-2 text-center">
					<img className="myPhoto" src={`${process.env.PUBLIC_URL}/images/myphoto.jpeg`} alt="" />
				</div>
				<div class="col-lg-6 order-lg-1 leftcol">
					<h1 className="name">
						Yugandhar <br /> Patil
					</h1>
					<h3 className="who">Full-Stack Web, App and Blockchain Developer</h3>
					<p className="about">
						I'm currently pursuing my BTech in Mechanical Enginnering at Manipal Institute of Technology. Self-taught developer
						specialized full-stack development, blockchain(dapps) development and app and game development. Being from a core engineering
						branch, I upskilled myself in the IT field by learning from Youtube, Udemy, Coursea and ocassional guidance from my seniors at
						college.
						<br />
						<br />
						<br />
						Interested in anything challenging in the field of IT, be it software development, Sass product development etc.
						<br />
						<br />
						<br />
						My hobbies are playing tennis, video games, electronics and coding of course!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
