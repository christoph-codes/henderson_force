import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/client";

export type NavItem = {
	label: string;
	href: string;
	target: "_self" | "_blank";
};

const NAVIGATION_QUERY = `*[_type == "link" && "header" == category[]]`;

export async function Navigtion() {
	const navItems: SanityDocument[] = await sanityFetch<SanityDocument[]>({
		query: NAVIGATION_QUERY,
	});
	console.log("navItems", navItems);
	return (
		<nav className="flex justify-between items">
			{navItems.map((navItem) => (
				<Link href={navItem.href} target={navItem.target}>
					{navItem.label}
				</Link>
			))}
		</nav>
	);
}
