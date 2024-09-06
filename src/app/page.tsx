import { SanityDocument } from "next-sanity";
import { Home } from "./home";
import { Metadata } from "next";
import { querySanity } from "../../sanity/lib/client";
import { PageTemplate } from "./template/PageTemplate";

const PAGE_QUERY = `*[_type == "page" && slug.current == "home"]`;
const SITE_CONFIG_QUERY = `*[_type == "siteConfig"]`;

export async function generateMetadata(): Promise<Metadata> {
  const [content] = await querySanity<SanityDocument[]>(PAGE_QUERY);

  return {
    title: `${content.name} | Henderson Force`,
    description: content.description,
  };
}

export default async function Page() {
  const content = await querySanity<SanityDocument>(PAGE_QUERY);
  const siteConfig = await querySanity<SanityDocument>(SITE_CONFIG_QUERY);

  return (
    <PageTemplate content={content[0]?.page_content}>
      <Home content={content[0]} siteConfig={siteConfig[0]} />
    </PageTemplate>
  );
}
