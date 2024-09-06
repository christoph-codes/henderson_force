import { SanityDocument } from "next-sanity";
import { JoinTheForceForm } from "@/components/JoinTheForceForm";
import { Hero } from "@/components/Hero";

export function JoinTheForce({ content }: { content: SanityDocument }) {
  return (
    <div className="flex flex-col">
      <Hero
        className="bg-default"
        title={content.name}
        description={content.description}
        logo
      />
      <div className="max-w-full md:max-w-3xl md:mx-auto px-8">
        {content.page_content.map(
          (block: {
            _key: string;
            _type: string;
            children: { text: string }[];
          }) => {
            return (
              <p key={block._key}>
                {block._type === "block" &&
                  block.children.map((child: { text: string }) => child.text)}
              </p>
            );
          },
        )}
        <JoinTheForceForm />
      </div>
    </div>
  );
}
