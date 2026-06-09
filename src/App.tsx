import About from "./layout/About";
import Contact from "./layout/Contact";
import Hero from "./layout/Hero";
import Projects from "./layout/Projects";

function App() {
	return (
		<>
			<main className="bg-beige text-primary">
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
		</>
	);
}

export default App;
