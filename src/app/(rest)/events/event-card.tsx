import { CalendarDaysIcon, PinIcon } from "lucide-react";
import Link from "next/link";

import { getDate } from "@/utils/getDate";

export const EventCard = ({
  event,
}: {
  event: {
    name: string;
    date: string;
    href: string;
    location: string;
  };
}) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:items-center lg:gap-6">
      <Link href={event.href}>
        <img
          src="/events_filler.jpeg"
          alt=""
          className="aspect-video rounded-lg"
        />
      </Link>

      <div>
        <div className="mb-4 flex items-center gap-8">
          <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-2 font-medium">
            <CalendarDaysIcon size={16} />
            {getDate(event.date)}
          </div>
          <div className="flex items-center gap-1">
            <PinIcon size={16} />
            <p>{event.location}</p>
          </div>
        </div>

        <Link href={event.href}>
          <h3 className="mb-4">{event.name}</h3>
          <p>
            Come enjoy a time of networking with other Black entrepreneurs and
            creators.
          </p>
        </Link>

        <a
          href="/"
          className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-white"
        >
          Register now
        </a>
      </div>
    </div>
  );
};
