"use client";

import { navItems } from "@/utils/navItems";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";

const Sidenav = ({
	isOpen,
	toggleSidenav,
}: {
	isOpen: boolean;
	toggleSidenav: VoidFunction;
}) => {
	return (
		<aside
			className={`bg-gray-900 z-20 p-4 w-[300px] absolute top-0 right-0 ${isOpen ? "translate-x-0" : "translate-x-[300px]"} h-screen transition-transform flex flex-col gap-2`}
		>
			<button
				onClick={() => toggleSidenav()}
				className="absolute right-3 top-3"
			>
				<FaWindowClose size={24} className="hover:text-white text-gray-400" />
			</button>
			{navItems.map((navItem) => {
				return (
					<>
						<Link
							key={navItem.label}
							href={navItem.href ?? "#"}
							target={navItem.target}
							className={`hover:text-white transition-colors p-3 hover:bg-gray rounded-md text-gray-400 first-of-type:mt-8 ${navItem.children ? "hover:text-white border-b relative font-bold text-white cursor-default" : ""}`}
						>
							{navItem.label}
						</Link>
						{navItem.children && (
							<div className="flex flex-col gap-2 ml-4">
								{navItem.children?.map((child) => {
									return (
										<Link
											key={child.label}
											href={child.href ?? ""}
											target={child.target}
											className="hover:text-white transition-colors p-3 hover:bg-gray rounded-md text-gray-400"
										>
											{child.label}
										</Link>
									);
								})}
							</div>
						)}
					</>
				);
			})}
		</aside>
	);
};

export default Sidenav;
