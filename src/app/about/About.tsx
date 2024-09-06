import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";

const About = ({ content }: { content: SanityDocument }) => {
  return (
    <>
      <Hero
        className="bg-[url('/default_bg.png')]"
        title={content.name}
        description={content.description}
        logo
      />
    </>
  );
};

export default About;
