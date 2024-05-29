"use client";

import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Input } from "@/components/Input";
import { RadioGroup } from "@/components/RadioGroup";
import SocialLinks from "@/components/SocialLinks";
import { SanityDocument } from "next-sanity";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const defaultPersonalInfo = {
	"Full Name": "",
	Address: "",
	"Phone Number": "",
	Email: "",
	"Have you been a billet host previously?": "",
};

const BilletInformation = ({ content }: { content: SanityDocument }) => {
	const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");
	const router = useRouter();
	const submit = async (e: FormEvent) => {
		e.preventDefault();
		setError("");
		if (
			!personalInfo["Full Name"] ||
			!personalInfo.Address ||
			!personalInfo["Phone Number"] ||
			!personalInfo.Email ||
			!personalInfo["Have you been a billet host previously?"]
		) {
			setError("Please enter all fields.");
			return;
		}

		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					fields: personalInfo,
					subject: "Billet Information Inquiry",
				}),
			});
			await response.json();
			setSubmitted(true);
			setPersonalInfo(defaultPersonalInfo);
		} catch (error) {
			console.error("Join the Force Error: ", error);
			setError("An error occurred submitting your Join the Force Submission.");
		}
	};
	return (
		<>
			<Hero
				className="bg-[url('/default_bg.png')]"
				title={content.name}
				description={content.description}
				logo
			/>
			<div className="max-w-full md:max-w-3xl md:mx-auto px-8">
				<form className="flex flex-col space-y-4 py-8" onSubmit={submit}>
					<h2 className="text-2xl font-semibold">Details</h2>
					<Input
						value={personalInfo["Full Name"] as string}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								"Full Name": e.target.value,
							})
						}
						label="Full Name"
						type="text"
						name="fullName"
						placeholder="John Doe"
						required
					/>
					<Input
						value={personalInfo["Address"] as string}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								Address: e.target.value,
							})
						}
						label="Address"
						type="text"
						name="address"
						placeholder="123 Main St."
						required
					/>
					<Input
						value={personalInfo["Phone Number"] as string}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								"Phone Number": e.target.value,
							})
						}
						label="Phone Number"
						type="tel"
						name="phone"
						placeholder="555-555-5555"
						required
					/>
					<Input
						value={personalInfo["Email"] as string}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								Email: e.target.value,
							})
						}
						label="Email"
						type="email"
						name="email"
						placeholder=""
						required
					/>
					<RadioGroup
						label="Have you been a billet host previously?"
						options={[
							{ value: "Yes", label: "Yes" },
							{ value: "No", label: "No" },
						]}
						name="billetHost"
						value={personalInfo["Have you been a billet host previously?"]}
						onChange={(radioValue) =>
							setPersonalInfo({
								...personalInfo,
								"Have you been a billet host previously?": radioValue,
							})
						}
					/>
					{error && <p className="text-red-500">{error}</p>}
					{!submitted ? (
						<Button type="submit">Submit</Button>
					) : (
						<div className="text-center">
							<FaCheckCircle className="text-green-500 text-4xl inline" />
							<h3>Thank You!</h3>
							<p>
								You will be contacted soon by a team representative. In the
								meantime follow us on social media for team updates.
							</p>
							<SocialLinks />
						</div>
					)}
				</form>
			</div>
		</>
	);
};

export default BilletInformation;
