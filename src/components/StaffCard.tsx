import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";

export type StaffType = {
	_id: string;
	slug: { current: string };
	type: "ownership" | "coach" | "leadership";
	link: string;
	image: string | any;
	name: string;
	title: string;
};

const StaffCard = ({
	type,
	staff,
}: {
	type: StaffType["type"];
	staff: SanityDocument[];
}) => {
	return (
		<div className="py-8 flex flex-col gap-3">
			<h2 className="border-b border-gray-500 pb-6">{type}</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{staff.map((staff: SanityDocument) => (
					<div key={staff._id} className="flex gap-4 items-center">
						<Link href={staff.link ?? `/team/staff/${staff.slug.current}`}>
							<img
								src={
									staff.image ? urlForImage(staff.image) : "/hforce_icon.svg"
								}
								alt={`${staff.name} image`}
								className="w-20 h-20 min-w-20 min-h-20 md:w-36 md:h-36 bg-black rounded-lg p-3"
							/>
						</Link>
						<div>
							<h3 className="text-mono text-left">{staff.name}</h3>
							{staff.position && (
								<p className="text-gray-400">{staff.position}</p>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default StaffCard;
