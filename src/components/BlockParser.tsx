import { SanityDocument } from "next-sanity";
import { Fragment } from "react";

const BlockParser = ({ data }: { data: SanityDocument }) => {
	return data?.map((block: any) => (
		<Fragment key={block._key}>
			{block.style === "h2" && <h3>{block.children[0].text}</h3>}
			{block.style === "normal" && (
				<>
					{block.listItem ? (
						<li>{block.children[0].text}</li>
					) : (
						<p className="mb-3">{block.children[0].text}</p>
					)}
				</>
			)}
		</Fragment>
	));
};

export default BlockParser;
