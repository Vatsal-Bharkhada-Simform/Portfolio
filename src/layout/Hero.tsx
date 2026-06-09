import HeroHead from "../components/HeroHead";

export default function Hero() {
	return (
		<section className="w-full min-h-screen flex flex-col">
			<HeroHead />
			<div className="flex-1 flex flex-col justify-center tracking-tighter px-6 md:px-28 gap-6 md:gap-12">
				<h1 className="text-5xl md:text-8xl font-semibold">
					Vatsal Bharkhada
				</h1>
				<h2 className="text-3xl md:text-6xl font-medium">
					React.js developer
				</h2>
				<div>
					<a
						href="#projects"
						className="bg-primary text-white cursor-pointer px-6 py-2 md:py-4 rounded-4xl text-lg md:text-xl tracking-normal inset-shadow-button hover:inset-shadow-button-hover transition-all duration-300"
						onClick={() => {
							const element = document.getElementById("projects");
							if (element && element instanceof HTMLElement) {
								element.scrollIntoView();
							}
						}}
					>
						View Projects
					</a>
				</div>
			</div>
		</section>
	);
}
