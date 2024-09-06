import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/client";
import { FaTiktok, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export const fetchSantityData = async (queryString: string) => {
  const data = await sanityFetch<SanityDocument>({
    query: queryString,
  });
  return data;
};

export const getSocialIcons = (category: string, size: number) => {
  const styles = `h-${size} w-${size} hover:text-white transition-colors duration-150 text-gray-300`;
  switch (category) {
    case "facebook":
      return <FaFacebook className={styles} />;
    case "instagram":
      return <FaInstagram className={styles} />;
    case "twitter":
      return <FaTwitter className={styles} />;
    case "tiktok":
      return <FaTiktok className={styles} />;
  }
};

export const formatTimestampToDate = (
  timestamp: string,
  time: boolean = false,
) => {
  const date = new Date(timestamp);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedTime = `${formattedHours}:${minutes} ${period}`;
  return `${formattedDate} ${time ? formattedTime : ""}`;
};
