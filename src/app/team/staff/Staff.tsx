"use client";

import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import JoinTheForceBanner from "@/components/JoinTheForceBanner";
import StaffCard, { StaffType } from "@/components/StaffCard";
import Link from "next/link";
import {
	Key,
	ReactElement,
	ReactNode,
	ReactPortal,
	AwaitedReactNode,
} from "react";

export function Staff({
	content,
	staff,
}: {
	content: SanityDocument;
	staff: SanityDocument[];
}) {
	return (
		<>
			<Hero className="bg-[url('/default_bg.png')]" title={content.name} logo />
			<Link href="/team" className="btn text-center mx-auto w-max block">
				« Back to Team
			</Link>
			<section className="container flex flex-col gap-6">
				{["coach", "leadership", "ownership"].map((type) => (
					<StaffCard
						key={type}
						type={type as StaffType["type"]}
						staff={staff.filter((post) => post.type === type)}
					/>
				))}
			</section>
			{content.page_content && (
				<section className="container rounded-md p-8 text-center text-2xl">
					{content.page_content?.map(
						(block: {
							_key: Key | null | undefined;
							_type: string;
							children: {
								text:
									| string
									| number
									| bigint
									| boolean
									| ReactElement
									| Iterable<ReactNode>
									| ReactPortal
									| Promise<AwaitedReactNode>
									| Iterable<ReactNode>
									| null
									| undefined;
							}[];
						}) => (
							<div key={block._key}>
								{block._type === "block" && (
									<p className="text-lg">{block.children[0].text}</p>
								)}
							</div>
						)
					)}
				</section>
			)}
			<JoinTheForceBanner />
		</>
	);
}
