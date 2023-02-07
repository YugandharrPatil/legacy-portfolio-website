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
						I'm currently pursuing my B.Tech in Mechanical Enginnering at Manipal Institute of Technology. I'm a completely self-taught
						developer specialized full-stack development, blockchain(dapps) development and app and game development. Being from a core
						engineering branch, I upskilled myself in the IT field by learning from Youtube, Udemy, Coursera and some ocassional guidance
						from my seniors at college whom I'm greatly thankful to!
						<br />
						<br />
						<br />
						Interested in taking up any project that challenges my skills in the field of IT, be it software development, design product
						development, or something completely new and challenging!
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
