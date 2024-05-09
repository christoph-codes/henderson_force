"use client";

import { FormEvent, useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { RadioGroup } from "../RadioGroup";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export function JoinTheForceForm() {
	const router = useRouter();
	const [submitted, setSubmitted] = useState(false);
	const [personalInfo, setPersonalInfo] = useState({
		fullName: "",
		nickname: "",
		address: "",
		cityStateZip: "",
		phone: "",
		email: "",
		dob: "",
		position: "",
		handed: "",
		currentTeam: "",
		responsibleParties: "", // eighteenOrOlder, parentSupport, guardianSupport, otherSupport
		parentDetails: {
			name: "",
			phone: "",
			email: "",
			relation: "",
		},
		guardianDetails: {
			name: "",
			phone: "",
			email: "",
			relation: "",
		},
		otherSupportDetails: {
			name: "",
			phone: "",
			email: "",
			relation: "",
		},
		incaseOfEmergency: "", // parent, guardian, other
	});

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		console.log("personalInfo: ", personalInfo);
		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ fields: personalInfo }),
			});
			const data = await response.json();
			console.log("data: ", data);
			setSubmitted(true);
		} catch (error) {
			console.error("error: ", error);
		}
	};

	return (
		<form className="flex flex-col space-y-4 py-8" onSubmit={submit}>
			<h2 className="text-2xl font-semibold">Personal Information</h2>
			<Input
				value={personalInfo.fullName}
				onChange={(e) =>
					setPersonalInfo({
						...personalInfo,
						fullName: e.target.value,
					})
				}
				label="Full Name"
				type="text"
				name="fullName"
				placeholder="John Doe"
				required
			/>
			<Input
				value={personalInfo.nickname as string}
				onChange={(e) =>
					setPersonalInfo({
						...personalInfo,
						nickname: e.target.value,
					})
				}
				label="Nickname"
				type="text"
				name="nickname"
			/>
			<Input
				value={personalInfo.address}
				onChange={(e) =>
					setPersonalInfo({
						...personalInfo,
						address: e.target.value,
					})
				}
				label="Address"
				type="text"
				name="address"
				required
			/>
			<Input
				value={personalInfo.cityStateZip}
				onChange={(e) =>
					setPersonalInfo({
						...personalInfo,
						cityStateZip: e.target.value,
					})
				}
				label="City, State, Zip"
				type="text"
				name="cityStateZip"
				required
			/>
			<Input
				value={personalInfo.phone}
				onChange={(e) =>
					setPersonalInfo({
						...personalInfo,
						phone: e.target.value,
					})
				}
				label="Phone"
				type="tel"
				name="phone"
				required
			/>
			<Input
				value={personalInfo.email}
				onChange={(e) =>
					setPersonalInfo({
						...personalInfo,
						email: e.target.value,
					})
				}
				label="Email"
				type="email"
				name="email"
				required
			/>
			<Input
				value={personalInfo.dob}
				onChange={(e) =>
					setPersonalInfo({
						...personalInfo,
						dob: e.target.value,
					})
				}
				label="Date of Birth"
				type="date"
				name="dob"
				required
			/>
			<Input
				value={personalInfo.position}
				onChange={(e) =>
					setPersonalInfo({
						...personalInfo,
						position: e.target.value,
					})
				}
				label="Position"
				type="text"
				name="position"
				required
			/>
			<Input
				value={personalInfo.handed}
				onChange={(e) =>
					setPersonalInfo({
						...personalInfo,
						handed: e.target.value,
					})
				}
				label="Handed"
				type="text"
				name="handed"
				required
			/>
			<Input
				value={personalInfo.currentTeam}
				onChange={(e) =>
					setPersonalInfo({
						...personalInfo,
						currentTeam: e.target.value,
					})
				}
				label="Current Team / Level"
				type="text"
				name="currentTeam"
				required
			/>
			<h2 className="text-2xl font-semibold">Responsible Parties</h2>

			<RadioGroup
				value={personalInfo.responsibleParties}
				options={[
					{
						value: "eighteenOrOlder+",
						label: "I am over 18 years of age and do not receive any support.",
					},
					{
						value: "parentSupport",
						label: "I receive support from my parent(s).",
					},
					{
						value: "guardianSupport",
						label: "I receive support from a legal guardian.",
					},
					{
						value: "otherSupport",
						label: "I receive support from other sources.",
					},
				]}
				onChange={(radioValue) =>
					setPersonalInfo({
						...personalInfo,
						responsibleParties: radioValue,
					})
				}
				label="Please choose the statement that best describes your situation?"
				name="responsibleParties"
			/>
			<h2 className="text-2xl font-semibold">In Case of Emergency</h2>
			<RadioGroup
				value={personalInfo.incaseOfEmergency}
				options={[
					{
						value: "parent",
						label: "Parent(s)",
					},
					{
						value: "guardian",
						label: "Guardian(s)",
					},
					{
						value: "other",
						label: "Other(s)",
					},
				]}
				onChange={(radioValue) =>
					setPersonalInfo({
						...personalInfo,
						incaseOfEmergency: radioValue,
					})
				}
				label="Best Person to Contact in Case of Emergency?"
				name="incaseOfEmergency"
			/>
			{(personalInfo.responsibleParties === "parentSupport" ||
				personalInfo.incaseOfEmergency === "parent") && (
				<>
					<h2 className="text-2xl font-semibold">Parent Details</h2>
					<Input
						value={personalInfo.parentDetails.name}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								parentDetails: {
									...personalInfo.parentDetails,
									name: e.target.value,
								},
							})
						}
						label="Parent's Name"
						type="text"
						name="parentName"
						required
					/>
					<Input
						value={personalInfo.parentDetails.phone}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								parentDetails: {
									...personalInfo.parentDetails,
									phone: e.target.value,
								},
							})
						}
						label="Parent's Phone"
						type="tel"
						name="parentPhone"
						required
					/>
					<Input
						value={personalInfo.parentDetails.email}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								parentDetails: {
									...personalInfo.parentDetails,
									email: e.target.value,
								},
							})
						}
						label="Parent's Email"
						type="email"
						name="parentEmail"
						required
					/>
					<Input
						value={personalInfo.parentDetails.relation}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								parentDetails: {
									...personalInfo.parentDetails,
									relation: e.target.value,
								},
							})
						}
						label="Relation"
						type="text"
						name="parentRelation"
						required
					/>
				</>
			)}
			{(personalInfo.responsibleParties === "guardianSupport" ||
				personalInfo.incaseOfEmergency === "guardian") && (
				<>
					<h2 className="text-2xl font-semibold">Guardian Details</h2>
					<Input
						value={personalInfo.guardianDetails.name}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								guardianDetails: {
									...personalInfo.guardianDetails,
									name: e.target.value,
								},
							})
						}
						label="Guardian's Name"
						type="text"
						name="guardianName"
						required
					/>
					<Input
						value={personalInfo.guardianDetails.phone}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								guardianDetails: {
									...personalInfo.guardianDetails,
									phone: e.target.value,
								},
							})
						}
						label="Guardian's Phone"
						type="tel"
						name="guardianPhone"
						required
					/>
					<Input
						value={personalInfo.guardianDetails.email}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								guardianDetails: {
									...personalInfo.guardianDetails,
									email: e.target.value,
								},
							})
						}
						label="Guardian's Email"
						type="email"
						name="guardianEmail"
						required
					/>
					<Input
						value={personalInfo.guardianDetails.relation}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								guardianDetails: {
									...personalInfo.guardianDetails,
									relation: e.target.value,
								},
							})
						}
						label="Relation"
						type="text"
						name="guardianRelation"
						required
					/>
				</>
			)}
			{(personalInfo.responsibleParties === "otherSupport" ||
				personalInfo.incaseOfEmergency === "other") && (
				<>
					<h2 className="text-2xl font-semibold">Other Support Details</h2>
					<Input
						value={personalInfo.otherSupportDetails.name}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								otherSupportDetails: {
									...personalInfo.otherSupportDetails,
									name: e.target.value,
								},
							})
						}
						label="Other Supports Name"
						type="text"
						name="otherSupportName"
						required
					/>
					<Input
						value={personalInfo.otherSupportDetails.phone}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								otherSupportDetails: {
									...personalInfo.otherSupportDetails,
									phone: e.target.value,
								},
							})
						}
						label="Other Supports Phone"
						type="tel"
						name="otherSupportPhone"
						required
					/>
					<Input
						value={personalInfo.otherSupportDetails.email}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								otherSupportDetails: {
									...personalInfo.otherSupportDetails,
									email: e.target.value,
								},
							})
						}
						label="Other Supports Email"
						type="email"
						name="otherSupportEmail"
						required
					/>
					<Input
						value={personalInfo.otherSupportDetails.relation}
						onChange={(e) =>
							setPersonalInfo({
								...personalInfo,
								otherSupportDetails: {
									...personalInfo.otherSupportDetails,
									relation: e.target.value,
								},
							})
						}
						label="Relation"
						type="text"
						name="otherSupportRelation"
						required
					/>
				</>
			)}
			<hr className="border-gray-300 my-8" />

			{!submitted ? (
				<Button type="submit">Submit</Button>
			) : (
				<div className="text-center">
					<FaCheckCircle className="text-green-500 text-4xl inline" />
					<h3>Thank You!</h3>
					<p>
						You will be contacted soon by a team representative. In the meantime
						follow us on social media for team updates.
					</p>
					<Button onClick={() => router.push("/")}>Home</Button>
				</div>
			)}
		</form>
	);
}
