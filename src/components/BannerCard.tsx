import Link from "next/link";

export type BannerCardProps = {
  title: string;
  link: string;
  image?: string;
};

const BannerCard = ({ title, link, image }: BannerCardProps) => {
  return (
    <Link href={link} className="">
      <div
        style={image ? { backgroundImage: `url('${image}')` } : {}}
        className={`bg-gray-900 h-[250px] md:h-[350px] flex justify-end items-center rounded-lg p-3`}
      >
        <h2 className="w-full md:w-1/3 text-[42px] text-center md:text-left">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default BannerCard;
