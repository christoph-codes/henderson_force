"use client";
import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { urlForImage } from "../../../../sanity/lib/image";
import { formatTimestampToDate } from "@/utils/helpers";

export type PostProps = {
	details: SanityDocument;
};

const Post = ({ details }: PostProps) => {
	return (
		<>
			<Hero
				bg={details.image ? urlForImage(details.image) : "/default_bg.png"}
				className="bg-[url('/default_bg.png')]"
				title={details.title}
				description={details.description}
				subtitle={formatTimestampToDate(details.date)}
			/>
			<section className="container">
				<div className="space-y-6">
					<Link href="/news" className="btn text-center mx-auto w-max block">
						« Back to News
					</Link>
				</div>
			</section>
		</>
	);
};

export default Post;
