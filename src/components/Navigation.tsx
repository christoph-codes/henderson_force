import { navItems } from "@/utils/navItems";
import Link from "next/link";

export function Navigtion() {
	return (
		<nav className="flex justify-between items-center gap-5">
			{navItems.map((navItem) => {
				return (
					<>
						<Link
							key={navItem.label}
							href={navItem.href ?? ""}
							target={navItem.target}
							className="group/link hover:text-primary transition-colors group/hover:text-white group/hover:bg-black group/rounded-md group/p-3 group/hover:bg-gray-900 text-gray-400 relative"
						>
							{navItem.label}

							{navItem.children && (
								<div className="bg-gray-900 flex-col gap-2 rounded-md absolute p-3 group-hover/link:flex hidden">
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
						</Link>
					</>
				);
			})}
		</nav>
	);
}
