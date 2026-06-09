import { projects } from "../utils/projects";
import arrow_link from "../assets/icons/arrow_link.svg";

export default function Projects() {
	return (
		<>
			<section
				id="projects"
				className="min-h-screen flex flex-col gap-8 md:gap-12 bg-white px-6 md:px-16 lg:px-48 py-12 md:py-16 lg:py-24"
			>
				<div>
					<h2 className="text-4xl md:text-5xl font-semibold">
						Projects
					</h2>
				</div>
				<div className="py-8 grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-12">
					{projects.map((project) => {
						return (
							<div key={project.id}>
								<img
									src={project.imageUrl}
									alt={`${project.name} image`}
									className="rounded-2xl"
								/>
								<div className="py-8 px-2 flex flex-col gap-4">
									<h3 className="text-2xl font-semibold">
										<a
											href={project.url}
											className="no-underline hover:underline"
										>
											{project.name}
										</a>
										<img
											src={arrow_link}
											alt="link icon"
											className="w-5 inline-block ml-2 align-middle"
										/>
									</h3>
									<div className="font-inter font-light tracking-tight text-lg">
										{project.description}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
}
