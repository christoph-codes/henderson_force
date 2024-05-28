import { Hero } from "@/components/Hero";
import { PageTemplate } from "@/app/template/PageTemplate";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../sanity/lib/image";
import FlexCard from "@/components/FlexCard";
import Link from "next/link";

export function Home({
	content,
	news,
}: {
	content: SanityDocument;
	news: SanityDocument[];
}) {
	return (
		<PageTemplate>
			<Hero className="bg-[url('/default_bg.png')]" title={content.name} logo />
			<section className="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 grid-flow-col auto-rows-auto gap-8 md:gap-6 container">
				{news.slice(0, 3).map((post) => (
					<FlexCard
						link={post.link ?? `/news/${post.slug.current}`}
						key={post._id}
						image={post.image && urlForImage(post.image)}
						title={post.title}
						description={post.description}
					/>
				))}
			</section>
			<section className="container rounded-md p-8 bg-gray-900 text-center text-2xl">
				{content.page_content.map((block: any) => (
					<div key={block._key}>
						{block._type === "block" && (
							<p className="text-lg">{block.children[0].text}</p>
						)}
					</div>
				))}
			</section>
			<Link href="/join">
				<section className="container gap-4 flex-col md:flex-row bg-[url('/join_force_bg.png')] bg-cover bg-no-repeat bg-full flex justify-around items-center p-8">
					<img
						src="/hforce_icon_alt.svg"
						alt="Henderson Force Icon"
						className="w-20 h-20 md:w-36 md:h-36"
					/>
					<h2 className="font-sans text-[72px] md:text-[90px] leading-tight text-center">
						Join the <span className="underline">Force</span>
					</h2>
					<img
						src="/hforce_icon_alt.svg"
						alt="Henderson Force Icon"
						className="w-20 h-20 md:w-36 md:h-36"
					/>
				</section>
			</Link>
		</PageTemplate>
	);
}
