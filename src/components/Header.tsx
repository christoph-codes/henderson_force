"use client";

import Link from "next/link";
import { HForceHorizontalLogo } from "./HForceHorizontalLogo";
import { Navigation } from "./Navigation";
import { FaBars } from "react-icons/fa";
import { useSideNav } from "@/providers/SideNavProvider";
import { urlForImage } from "../../sanity/lib/image";
import { SanityDocument } from "next-sanity";
export type Logo = {
	src: string;
	name: string;
	link: string;
};

export function Header({
	sponsors,
	navLinks,
}: {
	sponsors?: SanityDocument[];
	navLinks: SanityDocument[];
}) {
	const { toggleSideNav } = useSideNav();
	return (
		<header className="py-2 md:py-0 sticky z-20 shadow-md top-0 bg-gray">
			<div className="container">
				<div className="flex justify-between items-center py-3">
					<Link href="/" passHref>
						<HForceHorizontalLogo className="max-w-[150px]" />
					</Link>
					<div className="hidden md:flex items-center gap-8">
						{sponsors?.map((logo: any) => {
							return logo.link ? (
								<Link
									key={logo._id}
									href={logo.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={urlForImage(logo.logo_image).toString()}
										alt={`${logo.name} Logo`}
										className="max-h-[35px] w-full"
									/>
								</Link>
							) : (
								<img
									key={logo._id}
									src={urlForImage(logo.logo_image).toString()}
									alt={`${logo.name} Logo`}
									className="max-h-[35px] w-full"
								/>
							);
						})}
					</div>
					<div className="block md:hidden">
						<button
							onClick={() => toggleSideNav()}
							className="bg-gray-900 p-3 rounded-md hover:bg-black transition-colors hover:text-primary"
						>
							<FaBars size={24} />
						</button>
					</div>
				</div>
			</div>
			<div className="py-3 bg-black hidden md:block">
				<div className="container flex justify-between items-center gap-3">
					<Navigation navItems={navLinks} />
					<Link
						className="flex gap-4 items-center"
						href="https://www.usphlpremier.com/"
						passHref
						target="_blank"
					>
						<img
							className="max-h-10"
							src="/usphl_premiere_logo.png"
							alt="USPHL Premiere Logo"
						/>
						<span>USPHL Premier</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
