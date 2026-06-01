import star_wars from "../assets/images/star_wars.jpeg";
import box_tetris from "../assets/images/box_tetris.jpeg";
import bookmark_manager from "../assets/images/bookmark_manager.jpeg";
import colorVerse from "../assets/images/colorVerse.jpeg";

type Projects = {
	id: number;
	name: string;
	description: string;
	url: string;
    imageUrl: string;
};

const projects: Projects[] = [
	{
		id: 1,
		name: "Star Wars",
		description:
			"A fun game to learn new words and practice fast typing. Built using typescript, the game is designed on a space exploration theme.",
		url: "https://js-prac-test.pages.dev/",
		imageUrl: star_wars,
	},
	{
		id: 2,
		name: "Box tetris",
		description:
			"A spinoff to the legendary tetris game. The game shrinks the OG tetris grid into a 8x8 box with auto-generated blocks.",
		url: "https://box-tetris.pages.dev/",
		imageUrl: box_tetris,
	},
	{
		id: 3,
		name: "Bookmark Manager",
		description:
			"An accessible and practical bookmark manager to manage all your bookmarks in an organized manner. Create collections to group your bookmarks.",
		url: "https://bookmark-manager-eqv.pages.dev/",
		imageUrl: bookmark_manager,
	},
	{
		id: 4,
		name: "ColorVerse",
		description:
			"Create your unique color palette from an auto-generated infinite color grid containing unique color shades. Copy any color of your like and generate shades to create your color palette.",
		url: "https://colorverse.pages.dev/",
		imageUrl: colorVerse,
	},
];

export { projects };
