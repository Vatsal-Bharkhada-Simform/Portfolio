export default function HeroHead() {
	function handleClick(e: React.MouseEvent, id: string) {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element && element instanceof HTMLElement) {
			console.log("Scrolling");
			element.scrollIntoView();
		}
	}

	return (
		<header className="fixed top-0 left-0 w-full p-2 flex justify-center">
			<nav className="flex w-5xl px-4 py-4 md:px-12 md:py-8 rounded-[20rem] backdrop-blur-md bg-beige-translucent">
				<ul className="flex w-full justify-around">
					<NavItem
						href={"#projects"}
						title={"Projects"}
						onClick={handleClick}
					/>
					<NavItem
						href={"#about"}
						title={"About"}
						onClick={handleClick}
					/>
					<NavItem
						href={"#contact"}
						title={"Contact"}
						onClick={handleClick}
					/>
				</ul>
			</nav>
		</header>
	);
}

function NavItem({
	href,
	title,
	onClick: clickHandler,
}: {
	href: string;
	title: string;
	onClick: (e: React.MouseEvent, id: string) => void;
}) {
	return (
		<li className="text-lg md:text-2xl font-medium">
			<a href={href} onClick={(e) => clickHandler(e, href.split("#")[1])}>
				{title}
			</a>
		</li>
	);
}
