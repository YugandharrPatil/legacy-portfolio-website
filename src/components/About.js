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
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam neque eius unde dignissimos perspiciatis suscipit, odio odit
						harum nulla reprehenderit amet explicabo tenetur ad aliquid molestias quod mollitia veritatis exercitationem laudantium iusto
						eveniet perferendis laboriosam! Nam quibusdam dolores, veniam cum voluptates nesciunt fuga aperiam incidunt iure corporis,
						deserunt necessitatibus, dolorem minus! Mollitia, quas neque. Illo voluptatibus neque consequuntur excepturi voluptatum facere
						temporibus doloribus similique quos perspiciatis, voluptas iste nostrum eius.
						<br />
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, velit odio perferendis nam harum odit blanditiis
						exercitationem obcaecati numquam veritatis, alias eaque repellendus. Architecto reprehenderit quisquam quis fuga nostrum esse
						consectetur nihil? Laudantium blanditiis eligendi doloremque deleniti possimus eveniet. Illum!
						<br />
						<br />
						<br />
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio praesentium excepturi vero dicta recusandae ipsam.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
