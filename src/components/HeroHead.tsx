export default function HeroHead() {
	return (
		<header className="fixed top-0 left-0 w-full p-8">
			<nav className="flex justify-center">
				<ul className="flex gap-20">
					<NavItem href={"#"} title={"Projects"} />
					<NavItem href={"#"} title={"Skills"} />
					<NavItem href={"#"} title={"Contact"} />
				</ul>
			</nav>
		</header>
	);
}

function NavItem({ href, title }) {
	return (
		<li className="text-2xl font-medium">
			<a href={href}>{title}</a>
		</li>
	);
}
