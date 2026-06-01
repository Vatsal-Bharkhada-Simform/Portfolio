export default function Textarea({
	...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
	return (
		<textarea
			className="w-full px-4 py-2 bg-white border-2 border-primary/0 focus:border-primary/55 outline-none rounded-xl font-inter tracking-tight"
			{...props}
		/>
	);
}
