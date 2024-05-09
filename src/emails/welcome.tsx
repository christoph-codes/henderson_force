import { HForceLogo } from "@/components/HForceIcon";

interface EmailTemplateProps {
	fields: any;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (
	fields
) => (
	<div className="bg-gray">
		<HForceLogo className="w-36 h-36 mx-auto" />
		<h1>New Potential Force Member!</h1>
		{Object.entries(fields).map((field) => {
			const label = field[0];
			const value = field[1];
			return (
				<p key={label} className="mb-8">
					<strong>{label}:</strong>
					<br />
					{typeof value === "string"
						? value
						: Object.entries((value: any) => {
								const subLabel = value[0];
								const subValue = value[1];
								return (
									<p>
										<strong>{subLabel}:</strong>
										{subValue}
									</p>
								);
							})}
				</p>
			);
		})}
	</div>
);
