export default function About() {
	return (
		<>
			<section
				id="about"
				className="h-screen flex flex-col gap-12 bg-white px-12 md:px-48 py-24"
			>
				<div className="flex flex-col gap-10 w-5xl max-w-full">
					<span className="block w-24 h-0.5 bg-muted"></span>
					<span className="text-lg tracking-[10px] font-inter text-black">
						ABOUT
					</span>
					<h2 className="text-6xl">
						Hi, myself Vatsal Bharkhada, a passionate React
						developer experienced in creating modern and sleek web
						applications.
					</h2>
				</div>
				<span className="w-full h-px bg-gray-200"></span>
				<div className="text-2xl font-inter font-light text-dark-gray">
					Currently working as React.js trainee at Simform, Ahmedabad.
				</div>
				<div className="text-2xl font-inter font-light text-dark-gray">
					<h3 className="font-medium mb-4">Core disciplines:</h3>
					<ul className="list-none text-xl flex flex-col gap-4">
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
