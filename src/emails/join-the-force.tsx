import {
	Html,
	Tailwind,
	Container,
	Img,
	Row,
	Column,
	Section,
} from "@react-email/components";
import config from "../../tailwind.config";

export type JoinTheForceProps = Record<string, string | Record<string, string>>;

const baseUrl =
	process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL : "";

export default function JoinTheForce(fields: JoinTheForceProps) {
	return (
		<Tailwind config={config}>
			<Html className="p-3 !font-mono" style={{ fontFamily: "sans-serif" }}>
				<Section className="text-center">
					<Img
						src={`${baseUrl}/static/hforce_icon.png`}
						alt="Henderson Force Logo"
						width="144"
						className="inline"
					/>
					<h1 className="text-gray">New Potential Force Member!</h1>
				</Section>
				<Container className="border-gray-500">
					<div className="flex flex-col gap-2">
						{Object.entries(fields).map((field) => {
							const label = field[0];
							const value = field[1];
							return (
								<tr
									key={label}
									className="p-3 bg-gray-100 rounded-sm mb-1 flex"
								>
									<td className="w-1/3">
										<span className="capitalize">{label}:</span>
									</td>
									<td className="w-2/3">
										<strong>
											{typeof value === "string"
												? value
												: Object.values(value).length > 0 && (
														<Container className="w-full">
															{Object.entries(value).map((subField) => {
																const subLabel = subField[0];
																const subValue = subField[1];
																if (!subValue) return "N/A";
																return (
																	<Row key={subLabel} className="gap-2 w-full">
																		<Column className="capitalize !font-normal w-1/4">
																			{subLabel}:
																		</Column>
																		<Column className="w-3/4">
																			<strong>
																				{typeof subValue === "string"
																					? subValue
																					: JSON.stringify(subValue)}
																			</strong>
																		</Column>
																	</Row>
																);
															})}
														</Container>
													)}
										</strong>
									</td>
								</tr>
							);
						})}
					</div>
				</Container>
				<p className="text-center font-sans text-gray-300">
					Copyright © {new Date().getFullYear()} Henderson Force. All Rights
					Reserved.
				</p>
			</Html>
		</Tailwind>
	);
}

JoinTheForce.PreviewProps = {
	"Full Name": "John Doe",
	nickname: "JD",
	address: "123 Main St",
	"City / State / Zip": "New York, NY 12345",
	phone: "555-123-4567",
	email: "johndoe@example.com",
	dob: "01/01/1990",
	position: "Developer",
	handed: "Right",
	currentTeam: "Team A",
	"Responsible Parties": "18+",
	"Parent Details": {
		name: "Jane Doe",
		phone: "555-987-6543",
		email: "janedoe@example.com",
		relation: "Parent",
	},
	// "Guardian Details": {
	// 	name: "John Smith",
	// 	phone: "555-555-5555",
	// 	email: "johnsmith@example.com",
	// 	relation: "Guardian",
	// },
	"Other Support Details": {
		name: "Sarah Johnson",
		phone: "555-111-2222",
		email: "sarahjohnson@example.com",
		relation: "Other",
	},
	"In Case Of Emergency": "Parent",
} as JoinTheForceProps;
