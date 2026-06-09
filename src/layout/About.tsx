export default function About() {
	return (
		<>
			<section
				id="about"
				className="min-h-screen flex flex-col justify-center gap-12 bg-white px-6 md:px-16 lg:px-48 py-12 md:py-16 lg:py-24"
			>
				<div className="flex flex-col gap-10 w-5xl max-w-full">
					<span className="block w-24 h-0.5 bg-muted"></span>
					<span className="text-sm md:text-lg tracking-[10px] font-inter text-black">
						ABOUT
					</span>
					<h2 className="text-3xl md:text-6xl">
						Hi, myself Vatsal Bharkhada, a passionate React
						developer experienced in creating modern and sleek web
						applications.
					</h2>
				</div>
				<span className="w-full h-px bg-gray-200"></span>
				<div className="text-lg md:text-2xl font-inter font-light text-dark-gray tracking-tight">
					Currently working as React.js trainee at Simform, Ahmedabad.
				</div>
				<div className="text-lg md:text-2xl font-inter font-light text-dark-gray tracking-tight">
					<h3 className="font-semibold mb-4">Core disciplines:</h3>
					<ul className="list-none text-lg md:text-xl flex flex-col gap-4">
						<li>Component design</li>
						<li>User Experience research</li>
						<li>Modern approach</li>
						<li>Responsive and modern UI</li>
					</ul>
				</div>
			</section>
		</>
	);
}
