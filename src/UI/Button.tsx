type Variant = "PRIMARY" | "SECONDARY" | "TERTIARY";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: Variant;
}

const buttonClassNames: Record<Variant, string> = {
	PRIMARY:
		"bg-[#312a22] text-white px-6 py-4 rounded-4xl text-xl tracking-normal inset-shadow-button hover:inset-shadow-button-hover transition-all duration-300",
	SECONDARY:
		"bg-[#312a22] text-white px-6 py-4 rounded-4xl text-xl tracking-normal inset-shadow-button hover:inset-shadow-button-hover transition-all duration-500",
	TERTIARY:
		"bg-[#312a22] text-white px-6 py-4 rounded-4xl text-xl tracking-normal inset-shadow-button hover:inset-shadow-button-hover transition-all duration-500",
};

export default function Button({ variant, ...props }: ButtonProps) {
	return (
		<button className={buttonClassNames[variant]}>{props.children}</button>
	);
}
