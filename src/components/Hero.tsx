import { twMerge } from "tailwind-merge";
import { HForceLogo } from "./HForceIcon";
import Link from "next/link";

export type HeroProps = {
	className?: string;
	title: string;
	description?: string;
	logo?: boolean;
	bg?: string;
};

export function Hero({
	title,
	description,
	logo,
	className,
	bg = "/default_bg.png",
}: HeroProps) {
	return (
		<div
			style={bg ? { backgroundImage: `url("${bg}")` } : {}}
			className={twMerge(
				"bg-purple text-white p-8 min-h-96 flex flex-col justify-center text-center items-center mb-12 bg-cover bg-no-repeat",
				className
			)}
		>
			<div className="max-w-full md:max-w-3xl md:mx-auto px-4 flex flex-col items-center gap-6">
				{logo && (
					<Link href="/">
						<HForceLogo color="#FFF" className="w-36 h-36" />
					</Link>
				)}
				<h1 className="text-6xl">{title}</h1>
				{description && <p className="text-2xl capitalize">{description}</p>}
			</div>
		</div>
	);
}
