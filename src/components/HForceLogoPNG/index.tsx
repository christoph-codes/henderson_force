const baseUrl =
	process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BASE_URL : "";

export default function HForceLogoPNG() {
	return (
		<img
			src={`${baseUrl}/hforce_icon.png`}
			alt="Henderson Force Logo"
			width="144"
			className="inline"
		/>
	);
}
