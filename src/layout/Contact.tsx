import { useState } from "react";
import github_svg from "../assets/icons/github.svg";
import linkedin_svg from "../assets/icons/linkedin.svg";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";

type FormData = {
	name: string;
	email: string;
	contact: string;
	message: string;
};

export default function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		contact: "",
		message: "",
	});

	function handleChange(e: React.InputEvent) {
		const { name, value } = e.target as HTMLInputElement;

		if (
			name === "contact" &&
			(value.trim() === formData.contact || isNaN(Number(value.trim())))
		) {
			return;
		}

		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	function handleFormSubmit(e: React.SubmitEvent) {
		e.preventDefault();

		for (const value in formData) {
			if (formData[value].trim() === "") {
				alert("Please fill in all the form fields");
				return;
			}
		}

		if (!formData.email.includes("@") || !formData.email.includes(".")) {
			alert("Please provide a proper email");
			return;
		}

		if (formData.contact.length !== 10) {
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
		<section className="min-h-screen bg-white px-12 md:px-56 py-24 flex items-center">
			<div className="flex gap-4 p-8 rounded-[4rem] shadow-p-uniform">
				<div className="flex-1 flex flex-col justify-between p-8">
					<div className="flex flex-col gap-6">
						<h2 className="text-4xl">Get in touch</h2>
						<span className="text-xl font-inter tracking-tight font-light">
							Liked what you saw, reach me out by filling this
							form or through the social media handles provided
							below. Open to any technical interaction or
							collaboration ideas.
						</span>
					</div>
					<div className="flex gap-4">
						<a href="#github">
							<img
								src={github_svg}
								alt="GitHub logo"
								className="w-14"
							/>
						</a>
						<a href="#linkedin">
							<img
								src={linkedin_svg}
								alt="Linkedin logo"
								className="w-14"
							/>
						</a>
					</div>
				</div>
				<div className="flex-2 bg-beige/80 rounded-[2.4rem] overflow-hidden">
					<form
						onSubmit={handleFormSubmit}
						className="flex flex-col gap-6 p-8"
					>
						<Input
							labelText="Name"
							type="text"
							placeholder="Enter your name"
							name="name"
							value={formData.name}
							onInput={handleChange}
							required
						/>
						<Input
							labelText="Email"
							type="email"
							placeholder="Enter your email"
							name="email"
							value={formData.email}
							onInput={handleChange}
							required
						/>
						<Input
							labelText="Contact"
							type="tel"
							placeholder="Enter your contact number"
							name="contact"
							minLength={10}
							maxLength={10}
							value={formData.contact}
							onInput={handleChange}
							required
						/>
						<Textarea
							placeholder="How can I help"
							rows={4}
							name="message"
							maxLength={500}
							value={formData.message}
							onInput={handleChange}
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
