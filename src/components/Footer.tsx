import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { querySanity } from "../../sanity/lib/client";
import SocialLinks from "./SocialLinks";

const FOOTER_LINKS_QUERY = `*[_type == "link" && "footer" in category[]] | order(_createdAt asc)`;

const Footer = async () => {
	const footerLinks: SanityDocument[] =
		await querySanity<SanityDocument[]>(FOOTER_LINKS_QUERY);
	return (
		<footer className="py-8 text-center">
			<div className="container flex flex-col justify-center">
				<SocialLinks />
				{footerLinks && (
					<div className="hidden text-center md:flex flex-col md:flex-row justify-center gap-6 mb-4">
						{footerLinks.map((link: any) => {
							return (
								<Link
									key={link._id}
									href={link.link ?? ""}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-primary transition-colors"
								>
									{link.name}
								</Link>
							);
						})}
					</div>
				)}
				<p className="text-gray-400">
					Copyright © {new Date().getFullYear()}. Henderson Force. All Rights
					Reserved.
				</p>

				<img
					src="/hforce_icon.svg"
					alt="Henderson Force Icon"
					className="w-16 h-16 mx-auto"
				/>
			</div>
		</footer>
	);
};

export default Footer;
