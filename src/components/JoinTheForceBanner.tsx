import Link from "next/link";

const JoinTheForceBanner = () => {
	return (
		<Link className="block" href="/join">
			<section className="container gap-4 flex-col md:flex-row bg-[url('/join_force_bg.png')] bg-cover bg-no-repeat bg-full flex justify-around items-center p-8">
				<img
					src="/hforce_icon_alt.svg"
					alt="Henderson Force Icon"
					className="w-20 h-20 md:w-36 md:h-36"
				/>
				<h2 className="font-sans text-[72px] md:text-[90px] leading-tight text-center">
					Join the <span className="underline">Force</span>
				</h2>
				<img
					src="/hforce_icon_alt.svg"
					alt="Henderson Force Icon"
					className="w-20 h-20 md:w-36 md:h-36"
				/>
			</section>
		</Link>
	);
};

export default JoinTheForceBanner;
