import { type QueryParams, createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
	apiVersion,
	dataset,
	projectId,
	useCdn,
});

export async function sanityFetch<QueryResponse>({
	query,
	params = {},
	tags,
}: {
	query: string;
	params?: QueryParams;
	tags?: string[];
}) {
	return client.fetch<QueryResponse>(query, params, {
		next: {
			revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
			tags,
		},
	});
}

export async function querySanity<T>(query: string): Promise<T> {
	return await sanityFetch<T>({
		query,
	});
}
