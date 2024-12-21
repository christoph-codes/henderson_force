import Script from "next/script";

const InstagramEmbed = () => {
	return (
		<>
			<blockquote
				className="instagram-media"
				data-instgrm-permalink="https://www.instagram.com/hendersonforce/?utm_source=ig_embed&amp;utm_campaign=loading"
				data-instgrm-version="14"
				style={{
					border: 0,
					borderRadius: "8px",
					padding: 0,
					width: "calc(100% - 2px)",
				}}
			></blockquote>
			<Script async src="//www.instagram.com/embed.js"></Script>
		</>
	);
};

export default InstagramEmbed;
