import { InstagramPostData } from "@/app/media/page";
import Image from "next/image";
import Link from "next/link";

const InstagramFeed = ({ posts }: { posts: InstagramPostData[] }) => {
	return (
		<section className="container text-center">
			<div className="grid grid-cols-1 md:grid-cols-3 grid-flow-rows auto-rows-auto gap-8 md:gap-6 container justify-center">
				{posts.map((post) => {
					return (
						<a
							href={post.permalink}
							target="_blank"
							rel="noopener noreferrer"
							key={post.id}
							className="group/instagram"
						>
							<Image
								width={300}
								height={300}
								className="object-cover max-h-[300px] w-full h-full group-hover/instagram:opacity-50 transition-opacity duration-300"
								src={
									post.media_type === "VIDEO"
										? post.thumbnail_url
										: post.media_url
								}
								alt={post.caption}
							/>
						</a>
					);
				})}
			</div>
			<div className="p-8">
				<Link
					className="btn block md:inline-block"
					href="https://instagram.com/hendersonforce"
					target="_blank"
				>
					View More & Follow Us on Instagram
				</Link>
			</div>
		</section>
	);
};

export default InstagramFeed;
