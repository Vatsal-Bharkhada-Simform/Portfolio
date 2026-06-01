import About from "./layout/About";
import Hero from "./layout/Hero";
import Projects from "./layout/Projects";

function App() {
	return (
		<>
			<main className="bg-beige text-primary">
				<Hero />
				<About />
				<Projects />
			</main>
		</>
	);
}

export default App;
