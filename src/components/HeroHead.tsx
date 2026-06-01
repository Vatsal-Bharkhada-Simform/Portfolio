export default function HeroHead() {
	return (
		<header className="fixed top-0 left-0 w-full p-2 flex justify-center">
			<nav className="flex w-5xl px-12 py-8 rounded-[20rem] backdrop-blur-md">
				<ul className="flex w-full justify-around">
					<NavItem href={"#"} title={"Projects"} />
					<NavItem href={"#"} title={"Skills"} />
					<NavItem href={"#"} title={"Contact"} />
				</ul>
			</nav>
		</header>
	);
}

function NavItem({ href, title }: { href: string; title: string }) {
	return (
		<li className="text-2xl font-medium">
			<a href={href}>{title}</a>
		</li>
	);
}
