import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const industry = localFont({
	src: [
		{
			path: "./fonts/IndustryTest-UltraItalic.otf",
			weight: "700",
			style: "italic",
		},
		{ path: "./fonts/IndustryTest-Ultra.otf", weight: "700", style: "normal" },
	],
	variable: "--font-industry",
});
const gothic = localFont({
	src: [
		{
			path: "./fonts/GOTHIC.woff2",
			weight: "400",
			style: "normal",
		},
		{ path: "./fonts/GOTHICB.woff2", weight: "700", style: "bold" },
	],
	variable: "--font-gothic",
});

export const metadata: Metadata = {
	title: "Henderson Force",
	description: "The official Henderson Force website.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${industry.variable} ${gothic.variable}`}>
				{children}
			</body>
		</html>
	);
}
