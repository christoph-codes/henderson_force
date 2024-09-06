import Link from "next/link";

const JoinTheForceBanner = () => {
  return (
    <Link className="block group" href="/join">
      <section className="container group-hover:opacity-100 transition-opacity opacity-80 gap-4 flex-col md:flex-row bg-[url('/join_force_bg.png')] bg-cover bg-no-repeat bg-full flex justify-around items-center p-8">
        <img
          src="/hforce_icon_alt.svg"
          alt="Henderson Force Icon"
          className="w-20 h-20 md:w-36 md:h-36"
        />
        <h2 className="font-sans text-[72px] md:text-[90px] leading-[72px] md:leading-[90px] text-center mb-0r">
          Join the <span className="underline">Force</span>
          <span className="text-2xl block mt-4">(Player Interest Form)</span>
        </h2>
        <img
          src="/hforce_icon_alt.svg"
          alt="Henderson Force Icon"
          className="w-20 h-20 md:w-36 md:h-36 hidden md:block"
        />
      </section>
    </Link>
  );
};

export default JoinTheForceBanner;
