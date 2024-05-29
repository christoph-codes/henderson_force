"use client";
// import { navItems } from "@/utils/navItems";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";
import { useSideNav } from "@/providers/SideNavProvider";
import { Fragment } from "react";
import SocialLinks from "./SocialLinks";

const Sidenav = ({ links }: { links: SanityDocument[] }) => {
	const { isSideNavOpen, toggleSideNav } = useSideNav();
	return (
		<aside
			className={`bg-gray-900 z-20 p-3 w-[300px] absolute top-0 right-0 ${isSideNavOpen ? "translate-x-0" : "translate-x-[300px]"} h-screen transition-transform flex flex-col gap-1 overflow-y-auto`}
		>
			<button
				onClick={() => toggleSideNav()}
				className="absolute right-3 top-3"
			>
				<FaWindowClose size={24} className="hover:text-white text-gray-400" />
			</button>
			{links.map((navItem: any) => {
				return (
					<Fragment key={navItem._id}>
						<Link
							href={navItem.link ?? "#"}
							target={navItem.target}
							onClick={() => toggleSideNav()}
							className={`hover:text-white transition-colors p-2 hover:bg-gray rounded-md text-xl text-gray-400 first-of-type:mt-8 ${navItem.children ? "hover:text-white border-b relative font-bold text-white cursor-default" : ""}`}
						>
							{navItem.name}
						</Link>
						{navItem.children && (
							<div className="flex flex-col gap-1 ml-4">
								{navItem.children?.map((child: any) => {
									return (
										<Link
											key={child._key}
											href={child.link ?? ""}
											target={child.target}
											onClick={() => toggleSideNav()}
											className="hover:text-white text-xl transition-colors p-2 hover:bg-gray rounded-md text-gray-400"
										>
											{child.name}
										</Link>
									);
								})}
							</div>
						)}
					</Fragment>
				);
			})}
		</aside>
	);
};

export default Sidenav;
