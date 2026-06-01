interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	labelText?: string;
}

export default function Input({ labelText = "", ...props }: InputProps) {
	if (labelText) {
		return (
			<div className="flex flex-col gap-1">
				<label
					htmlFor={props.id}
					className="text-lg font-inter tracking-tight text-primary"
				>
					{labelText}
				</label>
				<input
					type={props.type}
					className="w-full px-4 py-2 bg-white border-2 border-primary/0 focus:border-primary/55 outline-none rounded-xl font-inter tracking-tight"
					{...props}
				/>
			</div>
		);
	}

	return (
		<input
			type={props.type}
			className="w-full px-4 py-2 bg-white border-2 border-primary/0 focus:border-primary/55 outline-none rounded-xl font-inter tracking-tight"
			{...props}
		/>
	);
}
