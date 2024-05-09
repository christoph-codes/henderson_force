"use client";

import { Button } from "@/components/Button";
import { HForceVerticalLogo } from "@/components/HForceVerticalLogo";
import { SanityDocument } from "next-sanity";
import { useRouter } from "next/navigation";

export function UnderConstruction({ content }: { content: SanityDocument }) {
	const router = useRouter();
	return (
		<div className="min-h-screen flex flex-col md:justify-center pt-8 md:pt-0 items-center bg-bolts bg-cover bg-no-repeat bg-center">
			<div className="text-center flex flex-col items-center gap-4 flex-wrap">
				<HForceVerticalLogo className="max-h-72 md:max-h-[400px] mb-8" />
				<h1 className="text-4xl md:text-6xl text-wrap">{content.name}</h1>
				<p className="text-gray-300 text-xl">{content.description}</p>
				<hr className="my-8 border-gray-500 border w-full inset-0" />
				<h3 className="mb">Ready to play for the Force?</h3>
				<Button onClick={() => router.push("/join")} className="mt-8">
					Join The Force
				</Button>
			</div>
		</div>
	);
}
