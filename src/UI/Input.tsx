interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	labelText?: string;
}

export default function Input({
	labelText = "",
	id,
	type,
	...props
}: InputProps) {
	if (labelText) {
		return (
			<div className="flex flex-col gap-1">
				<label
					htmlFor={id}
					className="text-base md:text-lg font-inter tracking-tight text-primary"
				>
					{labelText}
                    {
                        props.required && <span className="text-sm">*</span>
                    }
				</label>
				<input
					type={type}
					id={id}
					className="w-full px-4 py-2 bg-white border-2 border-primary/0 focus:border-primary/55 outline-none rounded-xl font-inter tracking-tight"
					{...props}
				/>
			</div>
		);
	}

	return (
		<input
			id={id}
			type={type}
			className="w-full px-4 py-2 bg-white border-2 border-primary/0 focus:border-primary/55 outline-none rounded-xl font-inter tracking-tight"
			{...props}
		/>
	);
}
