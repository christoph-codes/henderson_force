"use client";
import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "../../../../../sanity/lib/image";
import Link from "next/link";
import BlockParser from "@/components/BlockParser";

export type PlayerProfileProps = {
	profile: SanityDocument;
};

const PlayerProfile = ({ profile }: PlayerProfileProps) => {
	return (
		<>
			<Hero
				className="bg-[url('/default_bg.png')]"
				title={profile.name}
				description={profile.position}
			/>
			<section className="max-w-full md:max-w-3xl md:mx-auto rounded-md p-8">
				<img
					src={profile.image ? urlForImage(profile.image) : "/hforce_icon.svg"}
					alt={`${profile.name} Headshot`}
					className="bg-black h-48 w-48 rounded-full mx-auto -mt-36 mb-6 border-4 border-white object-cover"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 mb-16">
					<div className="text-center">
						{profile.hometown && (
							<>
								<h4>Hometown</h4>
								<p>{profile.hometown}</p>
							</>
						)}
						{profile.position && (
							<>
								<h4>Position</h4>
								<p>{profile.position}</p>
							</>
						)}
						{profile.number && (
							<>
								<h4>Jersey Number</h4>
								<p>{profile.number}</p>
							</>
						)}
						{profile.hudl && (
							<>
								<h4>Hudl Link</h4>
								<p>{profile.hudl}</p>
							</>
						)}
					</div>
					<div className="text-center">
						{profile.height && (
							<>
								<h4>Height</h4>
								<p>{profile.height}</p>
							</>
						)}
						{profile.weight && (
							<>
								<h4>Weight</h4>
								<p>{profile.weight} lbs.</p>
							</>
						)}
						{profile.shooting_side && (
							<>
								<h4>Shooting Side</h4>
								<p>{profile.shooting_side}</p>
							</>
						)}
						{profile.catching_side && (
							<>
								<h4>Catching Side</h4>
								<p>{profile.catching_side}</p>
							</>
						)}
						{profile.elite_prospects && (
							<>
								<h4>Elite Prospects Link</h4>
								<p>{profile.elite_prospects}</p>
							</>
						)}
					</div>
				</div>
				<div className="text-center">
					{profile.bio && (
						<>
							<h4>Bio:</h4>
							<BlockParser data={profile.bio} />
						</>
					)}
				</div>
				<Link
					href="/team/players"
					className="btn text-center mx-auto w-max block"
				>
					« Back to Players
				</Link>
			</section>
		</>
	);
};

export default PlayerProfile;
