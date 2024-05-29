import BannerCard from "@/components/BannerCard";
import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";

const Team = ({ content }: { content: SanityDocument }) => {
	return (
		<>
			<Hero title={content.name} description={content.description} />
			<div className="container flex flex-col gap-6">
				<BannerCard title="players" link="/team/players" />
				<BannerCard title="Staff" link="/team/staff" />
				<BannerCard title="Alumni" link="/team/alumni" />
			</div>
		</>
	);
};

export default Team;
