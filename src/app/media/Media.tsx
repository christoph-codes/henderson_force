import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import InstagramFeed from "@/components/InstagramFeed";
import { InstagramPostData } from "./page";

const Media = ({
  content,
  instagramPosts,
}: {
  content: SanityDocument;
  instagramPosts: InstagramPostData[];
}) => {
  return (
    <>
      <Hero
        className="bg-[url('/default_bg.png')]"
        title={content.name}
        description={content.description}
        logo
      />
      <InstagramFeed posts={instagramPosts} />
    </>
  );
};

export default Media;
