import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/client";

export const fetchSantityData = async (queryString: string) => {
	const data = await sanityFetch<SanityDocument>({
		query: queryString,
	});
	return data;
};
