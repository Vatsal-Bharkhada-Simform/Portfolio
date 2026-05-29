import HeroHead from "../components/HeroHead";
import Button from "../UI/Button";

export default function Hero() {
	return (
		<section className="w-full h-screen flex flex-col">
			<HeroHead />
			<div className="flex-1 flex flex-col justify-center tracking-tighter px-28 gap-12">
				<h1 className="text-8xl font-semibold">Vatsal Bharkhada</h1>
				<h1 className="text-6xl font-medium">React.js developer</h1>
				<div>
					<Button variant="PRIMARY">View Projects</Button>
				</div>
			</div>
		</section>
	);
}
