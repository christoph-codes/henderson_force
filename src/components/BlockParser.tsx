import { SanityDocument } from "next-sanity";
import {
	AwaitedReactNode,
	Fragment,
	Key,
	ReactElement,
	ReactNode,
	ReactPortal,
} from "react";

const BlockParser = ({ data }: { data: SanityDocument }) => {
	return data?.map(
		(block: {
			_key: Key | null | undefined;
			style: string;
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
			listItem: boolean;
		}) => (
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
		)
	);
};

export default BlockParser;
