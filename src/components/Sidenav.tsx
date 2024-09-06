"use client";
// import { navItems } from "@/utils/navItems";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";
import { useSideNav } from "@/providers/SideNavProvider";
import {
	AwaitedReactNode,
	Fragment,
	Key,
	ReactElement,
	ReactNode,
	ReactPortal,
} from "react";

const Sidenav = ({ links }: { links: SanityDocument[] }) => {
	const { isSideNavOpen, toggleSideNav } = useSideNav();
	return (
		<aside
			className={`bg-gray-900 z-20 p-3 w-[300px] fixed top-0 right-0 ${isSideNavOpen ? "translate-x-0" : "translate-x-[300px]"} h-screen transition-transform flex flex-col gap-1 overflow-y-auto`}
		>
			<button
				onClick={() => toggleSideNav()}
				className="absolute right-3 top-3"
			>
				<FaWindowClose size={24} className="hover:text-white text-gray-400" />
			</button>
			{links.map((navItem) => {
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
								{navItem.children?.map(
									(child: {
										_key: Key | null | undefined;
										link?: string;
										target: string | string | undefined;
										name:
											| string
											| number
											| bigint
											| boolean
											| ReactElement
											| Iterable<ReactNode>
											| ReactPortal
											| Promise<AwaitedReactNode>
											| (string & ReactElement)
											| (string & Iterable<ReactNode>)
											| (string & ReactPortal)
											| (string & Promise<AwaitedReactNode>)
											| (number & ReactElement)
											| (number & Iterable<ReactNode>)
											| (number & ReactPortal)
											| (number & Promise<AwaitedReactNode>)
											| (bigint & ReactElement)
											| (bigint & Iterable<ReactNode>)
											| (bigint & ReactPortal)
											| (bigint & Promise<AwaitedReactNode>)
											| (false & ReactElement)
											| (false & Iterable<ReactNode>)
											| (false & ReactPortal)
											| (false & Promise<AwaitedReactNode>)
											| (true & ReactElement)
											| (true & Iterable<ReactNode>)
											| (true & ReactPortal)
											| (true & Promise<AwaitedReactNode>)
											| (ReactElement & string)
											| (ReactElement & number)
											| (ReactElement & bigint)
											| (ReactElement & false)
											| (ReactElement & true)
											| (ReactElement & Iterable<ReactNode>)
											| (ReactElement & ReactPortal)
											| (ReactElement & Promise<AwaitedReactNode>)
											| (Iterable<ReactNode> & string)
											| (Iterable<ReactNode> & number)
											| (Iterable<ReactNode> & bigint)
											| (Iterable<ReactNode> & false)
											| (Iterable<ReactNode> & true)
											| (Iterable<ReactNode> & ReactElement)
											| (Iterable<ReactNode> & ReactPortal)
											| (Iterable<ReactNode> & Promise<AwaitedReactNode>)
											| (ReactPortal & string)
											| (ReactPortal & number)
											| (ReactPortal & bigint)
											| (ReactPortal & false)
											| (ReactPortal & true)
											| (ReactPortal & ReactElement)
											| (ReactPortal & Iterable<ReactNode>)
											| (ReactPortal & Promise<AwaitedReactNode>)
											| (Promise<AwaitedReactNode> & string)
											| (Promise<AwaitedReactNode> & number)
											| (Promise<AwaitedReactNode> & bigint)
											| (Promise<AwaitedReactNode> & false)
											| (Promise<AwaitedReactNode> & true)
											| (Promise<AwaitedReactNode> & ReactElement)
											| (Promise<AwaitedReactNode> & Iterable<ReactNode>)
											| (Promise<AwaitedReactNode> & ReactPortal)
											| (Iterable<ReactNode> & string)
											| (Iterable<ReactNode> & number)
											| (Iterable<ReactNode> & bigint)
											| (Iterable<ReactNode> & false)
											| (Iterable<ReactNode> & true)
											| (Iterable<ReactNode> & ReactElement)
											| (Iterable<ReactNode> & Iterable<ReactNode>)
											| (Iterable<ReactNode> & ReactPortal)
											| (Iterable<ReactNode> & Promise<AwaitedReactNode>)
											| null
											| undefined;
									}) => {
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
									}
								)}
							</div>
						)}
					</Fragment>
				);
			})}
		</aside>
	);
};

export default Sidenav;
