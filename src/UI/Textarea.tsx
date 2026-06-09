interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	labelText?: string;
}
export default function Textarea({ labelText, ...props }: TextAreaProps) {
	if (labelText) {
		return (
			<div className="flex flex-col gap-1">
				<label
					htmlFor={props.id}
					className="text-base md:text-lg font-inter tracking-tight text-primary"
				>
					{labelText}
				</label>
				<textarea
					className="w-full px-4 py-2 bg-white border-2 border-primary/0 focus:border-primary/55 outline-none rounded-xl font-inter tracking-tight"
					id={props.id}
					{...props}
				/>
			</div>
		);
	}

	return (
		<textarea
			className="w-full px-4 py-2 bg-white border-2 border-primary/0 focus:border-primary/55 outline-none rounded-xl font-inter tracking-tight"
			{...props}
		/>
	);
}
