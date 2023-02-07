import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
	return (
		<div>
			<div className="container">
				<Navbar />
				<About />
				<hr className="divider" />
				<Skills />
				<hr className="divider" />
				<Projects />
				<hr className="divider" />
				<Contact />
			</div>
			<>
				<Footer />
			</>
		</div>
	);
}

export default App;
