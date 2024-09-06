import { HForceVerticalLogo } from "@/components/HForceVerticalLogo";
import SocialLinks from "@/components/SocialLinks";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

export function UnderConstruction({
  content,
}: {
  content: {
    pageContent: SanityDocument;
    socialLinks: SanityDocument[];
  };
}) {
  return (
    <div className="min-h-screen flex flex-col md:justify-center py-8 md:pt-0 items-center bg-bolts bg-cover bg-no-repeat bg-center">
      <div className="text-center flex flex-col items-center flex-wrap">
        <HForceVerticalLogo className="max-h-72 md:max-h-[400px] mb-8" />
        <h1 className="text-4xl md:text-6xl text-wrap">
          {content.pageContent.name}
        </h1>
        {/* <p className="text-gray-300 text-xl">
					{content.pageContent.description}
				</p> */}
        <div className="py-4">
          <h3 className="mb">Open Camp July 12-14</h3>
          <Link
            href="https://henderson-force.sportngin.com/register/form/677617449"
            className="mt-8 btn block w-max mx-auto"
          >
            Sign up now!
          </Link>
        </div>
        <SocialLinks />
        <hr className="my-8 border-gray-500 border w-full inset-0" />
        <h3 className="mb">Ready to play for the Force?</h3>
        <Link href={"/join"} className="mt-8 btn">
          Join The Force
        </Link>
      </div>
    </div>
  );
}
