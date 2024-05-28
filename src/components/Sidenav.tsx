// import { navItems } from "@/utils/navItems";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";
import { sanityFetch } from "../../sanity/lib/client";

const MAIN_LINKS_QUERY = `*[_type == "link" && "header" in category[]] | order(_createdAt asc)`;

const Sidenav = async ({
	isOpen,
	toggleSidenav,
}: {
	isOpen: boolean;
	toggleSidenav: VoidFunction;
}) => {
	const navItems: SanityDocument = await sanityFetch<SanityDocument>({
		query: MAIN_LINKS_QUERY,
	});
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
			{navItems.map((navItem: any) => {
				return (
					<span key={navItem.label}>
						<Link
							href={navItem.href ?? "#"}
							target={navItem.target}
							className={`hover:text-white transition-colors p-3 hover:bg-gray rounded-md text-gray-400 first-of-type:mt-8 ${navItem.children ? "hover:text-white border-b relative font-bold text-white cursor-default" : ""}`}
						>
							{navItem.label}
						</Link>
						{navItem.children && (
							<div className="flex flex-col gap-2 ml-4">
								{navItem.children?.map((child: any) => {
									return (
										<Link
											key={child._key}
											href={child.link ?? ""}
											target={child.target}
											className="hover:text-white transition-colors p-3 hover:bg-gray rounded-md text-gray-400"
										>
											{child.name}
										</Link>
									);
								})}
							</div>
						)}
					</span>
				);
			})}
		</aside>
	);
};

export default Sidenav;
