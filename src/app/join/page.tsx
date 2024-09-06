import { Metadata } from "next";
import { SanityDocument } from "next-sanity";
import { querySanity } from "../../../sanity/lib/client";
import { JoinTheForce } from ".";
import { PageTemplate } from "../template/PageTemplate";

const PAGE_QUERY = `*[_type == "page" && slug.current == "join" ]`;

export async function generateMetadata(): Promise<Metadata> {
  const [content] = await querySanity<SanityDocument[]>(PAGE_QUERY);

  return {
    title: `${content.name} | Henderson Force`,
    description: content.description,
  };
}

export default async function Page() {
  const content = await querySanity<SanityDocument[]>(PAGE_QUERY);

  return (
    <PageTemplate>
      <JoinTheForce content={content[0]} />
    </PageTemplate>
  );
}
