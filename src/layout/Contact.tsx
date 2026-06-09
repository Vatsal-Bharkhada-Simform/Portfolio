import { useState, type ChangeEvent, type SubmitEvent } from "react";
import github_svg from "../assets/icons/github.svg";
import linkedin_svg from "../assets/icons/linkedin.svg";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";

interface FormData {
	name: string;
	email: string;
	contact: string;
	message: string;
}

export default function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		contact: "",
		message: "",
	});

	function handleChange(
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;

		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	function handleFormSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		for (const value in formData) {
			if (formData[value as keyof FormData].trim() === "") {
				alert("Please fill in all the form fields");
				return;
			}
		}

		if (!/^[A-Za-z. ]+$/.test(formData.name)) {
			alert("Please provide a proper name");
			return;
		}

		if (
			!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
				formData.email
			)
		) {
			alert("Please provide a proper email");
			return;
		}

		if (!/^\d{10}$/.test(formData.contact)) {
			alert("Please provide a proper contact number");
			return;
		}

		setFormData({
			name: "",
			email: "",
			contact: "",
			message: "",
		});

		alert("Form submitted!");
	}

	return (
		<section
			id="contact"
			className="min-h-screen bg-white px-4 md:px-8 py-12 md:py-24 flex justify-center items-center"
		>
			<div className="flex flex-col md:flex-row w-7xl gap-4 p-6 md:p-8 rounded-4xl md:rounded-[4rem] shadow-p-uniform">
				<div className="flex-1 flex flex-col justify-between p-4 px-2 md:p-8 gap-8">
					<div className="flex flex-col gap-6">
						<h2 className="text-3xl md:text-4xl">Get in touch</h2>
						<span className="text-lg md:text-xl font-inter tracking-tight font-light">
							Liked what you saw, reach me out by filling this
							form or through the social media handles provided
							below. Open to any technical interaction or
							collaboration ideas.
						</span>
					</div>
					<div className="flex gap-4">
						<a
							href="https://github.com/Vatsal-Bharkhada-Simform"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={github_svg}
								alt="GitHub logo"
								className="w-8 md:w-14"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/vatsal-bharkhada-22634827b"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={linkedin_svg}
								alt="Linkedin logo"
								className="w-8 md:w-14"
							/>
						</a>
					</div>
				</div>
				<div className="flex-2 bg-beige/80 rounded-2xl md:rounded-[2.4rem] overflow-hidden">
					<form
						onSubmit={handleFormSubmit}
						className="flex flex-col gap-6 p-4 md:p-8"
					>
						<Input
							labelText="Name"
							type="text"
							placeholder="Enter your name"
							id="name"
							name="name"
							maxLength={50}
							value={formData.name}
							onChange={handleChange}
							required
						/>
						<Input
							labelText="Email"
							type="email"
							placeholder="Enter your email"
							id="email"
							name="email"
							maxLength={100}
							value={formData.email}
							onChange={handleChange}
							required
						/>
						<Input
							labelText="Contact"
							type="tel"
							placeholder="Enter your contact number"
							id="contact"
							name="contact"
							minLength={10}
							maxLength={10}
							value={formData.contact}
							onChange={handleChange}
							required
						/>
						<Textarea
							labelText="Message"
							placeholder="How can I help"
							rows={4}
							id="message"
							name="message"
							maxLength={500}
							value={formData.message}
							onChange={handleChange}
							required
						/>
						<div>
							<Button
								variant="PRIMARY"
								type="submit"
								className="w-full md:w-auto md:px-16 py-2"
							>
								Submit
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
