type Variant = "PRIMARY";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: Variant;
}

const buttonClassNames: Record<Variant, string> = {
	PRIMARY:
		"bg-[#312a22] text-white cursor-pointer px-6 py-2 md:py-4 rounded-4xl text-lg md:text-xl tracking-normal inset-shadow-button hover:inset-shadow-button-hover transition-all duration-300",
};

export default function Button({ variant, ...props }: ButtonProps) {
	return (
		<button className={`${buttonClassNames[variant]} ${props.className ?? ""}`}>
			{props.children}
		</button>
	);
}
