import HeroHead from "../components/HeroHead";
import Button from "../UI/Button";

export default function Hero() {
	return (
		<section className="w-full min-h-screen flex flex-col">
			<HeroHead />
			<div className="flex-1 flex flex-col justify-center tracking-tighter px-6 md:px-28 gap-6 md:gap-12">
				<h1 className="text-5xl md:text-8xl font-semibold">Vatsal Bharkhada</h1>
				<h2 className="text-3xl md:text-6xl font-medium">React.js developer</h2>
				<div>
					<Button variant="PRIMARY">View Projects</Button>
				</div>
			</div>
		</section>
	);
}
