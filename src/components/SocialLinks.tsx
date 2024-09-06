"use client";

import { SanityDocument } from "next-sanity";
import { querySanity } from "../../sanity/lib/client";
import Link from "next/link";
import { getSocialIcons } from "@/utils/helpers";

const SOCIAL_LINKS_QUERY = `*[_type == "link" && "social" in category[]]`;

import { useEffect, useState } from "react";

const SocialLinks = ({ size = 8 }) => {
  const [links, setLinks] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      const fetchedLinks: SanityDocument[] =
        await querySanity<SanityDocument[]>(SOCIAL_LINKS_QUERY);
      setLinks(fetchedLinks);
    };

    fetchSocialLinks();
  }, []);

  return (
    links.length > 0 && (
      <div className="flex justify-center gap-4 md:flex-row md:gap-8 mb-4">
        {links.map((link) => {
          return (
            <Link
              key={link._id}
              href={link.link}
              className="mt-4 transition-colors"
              target="_blank"
            >
              {getSocialIcons(link.slug.current, size)}
            </Link>
          );
        })}
      </div>
    )
  );
};

export default SocialLinks;
