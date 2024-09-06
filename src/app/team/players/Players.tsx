"use client";

import { Hero } from "@/components/Hero";
import { SanityDocument } from "next-sanity";
import JoinTheForceBanner from "@/components/JoinTheForceBanner";
import PlayerListItem from "@/components/PlayerListItem";
import Link from "next/link";
import { urlForImage } from "../../../../sanity/lib/image";

export function Players({
  content,
  players,
}: {
  content: SanityDocument;
  players: SanityDocument[];
}) {
  return (
    <>
      <Hero
        className="bg-[url('/default_bg.png')]"
        title={content.name}
        description={content.description}
        logo
      />
      <Link href="/team" className="btn text-center mx-auto w-max block">
        « Back to Team
      </Link>
      {players.length > 0 ? (
        <section className="container flex flex-col mb-6">
          <table className="table-auto">
            <thead>
              <tr className="text-left border-b">
                <th className="hidden md:table-cell p-2 w-10"></th>
                <th className="p-2 w-10">#</th>
                <th className="flex-grow p-2">Player</th>
                <th className="hidden md:table-cell p-2">Position</th>
                <th className="hidden md:table-cell p-2"></th>
              </tr>
            </thead>
            <tbody>
              {players?.map((player) => (
                <PlayerListItem
                  key={player._id}
                  image={player.image && urlForImage(player.image)}
                  jerseyNumber={player.number}
                  title={player.name}
                  position={player.position}
                  link={`/team/players/${player.slug.current}`}
                />
              ))}
            </tbody>
          </table>
        </section>
      ) : (
        <section className="text-center">
          <h3>Coming Soon</h3>
        </section>
      )}
      <JoinTheForceBanner />
    </>
  );
}
