"use client";

import { Button } from "@/components/Button";
import { HForceVerticalLogo } from "@/components/HForceVerticalLogo";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaTiktok, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export const getSocialIcons = (category: string) => {
	const styles =
		"h-8 w-8 hover:text-white transition-colors duration-150 text-gray-300";
	switch (category) {
		case "facebook":
			return <FaFacebook className={styles} />;
		case "instagram":
			return <FaInstagram className={styles} />;
		case "twitter":
			return <FaTwitter className={styles} />;
		case "tiktok":
			return <FaTiktok className={styles} />;
	}
};

export function UnderConstruction({
	content,
}: {
	content: {
		pageContent: SanityDocument;
		socialLinks: SanityDocument[];
	};
}) {
	const router = useRouter();
	return (
		<div className="min-h-screen flex flex-col md:justify-center py-8 md:pt-0 items-center bg-bolts bg-cover bg-no-repeat bg-center">
			<div className="text-center flex flex-col items-center flex-wrap">
				<HForceVerticalLogo className="max-h-72 md:max-h-[400px] mb-8" />
				<h1 className="text-4xl md:text-6xl text-wrap">
					{content.pageContent.name}
				</h1>
				<p className="text-gray-300 text-xl">
					{content.pageContent.description}
				</p>
				{content.socialLinks.length > 0 && (
					<div className="flex gap-4 md:flex-row md:gap-8">
						{content.socialLinks.map((link) => {
							return (
								<Link
									key={link._id}
									href={link.link}
									className="mt-4"
									target="_blank"
								>
									{getSocialIcons(link.slug.current)}
								</Link>
							);
						})}
					</div>
				)}
				<hr className="my-8 border-gray-500 border w-full inset-0" />
				<h3 className="mb">Ready to play for the Force?</h3>
				<Button onClick={() => router.push("/join")} className="mt-8">
					Join The Force
				</Button>
			</div>
		</div>
	);
}
