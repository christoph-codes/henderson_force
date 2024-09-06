"use client";
import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../../../sanity/lib/image";
import Link from "next/link";
import BlockParser from "@/components/BlockParser";
import { SanityAsset } from "@sanity/image-url/lib/types/types";

export type StaffProfileProps = {
	profile: SanityDocument;
};

const StaffProfile = ({ profile }: StaffProfileProps) => {
	return (
		<>
			<Hero
				className="bg-[url('/default_bg.png')]"
				title={profile.name}
				description={profile.position}
			/>
			<section className="max-w-full md:max-w-3xl md:mx-auto rounded-md p-8 space-y-4">
				<img
					src={
						profile.headshot
							? urlForImage(profile.headshot)
							: "/hforce_icon.svg"
					}
					alt={`${profile.name} Headshot`}
					className="bg-black object-cover h-36 md:h-48 w-36 md:w-48 rounded-full mx-auto mt-8 mb-6 md:-mt-24 border-4 border-white"
				/>
				<Link
					href="/team/staff"
					className="btn text-center mx-auto w-max block"
				>
					« Back to Staff
				</Link>
				{profile.bio && (
					<>
						{profile.position && (
							<>
								<h4>Position</h4>
								<p>{profile.position}</p>
							</>
						)}
						<h4>Bio:</h4>
						<BlockParser data={profile.bio} />
					</>
				)}
				{profile.actionPhotos && profile.actionPhotos.length > 0 && (
					<div className="grid grid-rows-3 md:grid-cols-3 gap-3 w-full">
						{profile.actionPhotos.map((photo: SanityAsset) => (
							<img
								key={photo._id}
								src={urlForImage(photo)}
								width="100%"
								alt={`${profile.name} Action Photo`}
								className="rounded-lg h-full min-h-64 object-cover w-full"
							/>
						))}
					</div>
				)}
			</section>
		</>
	);
};

export default StaffProfile;
