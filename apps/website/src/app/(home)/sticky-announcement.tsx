"use client";

import { ArrowRight, CalendarClock } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const StickyAnnouncement = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, []);

  return (
    <>
      <div className="dark fixed bottom-4 right-4 lg:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <button className="relative flex aspect-square w-12 items-center justify-center rounded-full bg-light p-1 font-medium text-black">
              <div className="absolute -bottom-1 -left-1 -right-1 -top-1 -z-10 animate-pulse rounded-full border border-white/40 bg-primary"></div>
              <div className="flex aspect-square w-full items-center justify-center rounded-full border border-black">
                <CalendarClock size={20} strokeWidth={1.5} />
              </div>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Join us on February 14th for PluggedIn!</DialogTitle>
              <DialogDescription>
                Get your tickets now for a day of learning and networking with
                Black entrepreneurs and creators
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <button type="submit">Confirm</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="fixed bottom-4 hidden w-full lg:block">
        <div className="padded flex items-center justify-center">
          <div className="flex items-center justify-center gap-10 rounded-full border border-black/10 bg-light p-2 text-black shadow-md shadow-light/40">
            <div className="flex items-center gap-4">
              <div className="flex aspect-square h-12 items-center justify-center rounded-full">
                <CalendarClock size={24} />
              </div>
              <p className="font-bold">
                Join us on February 14th for PluggedIn!
              </p>
            </div>
            <Link
              href="/"
              className="rounded-full bg-black p-4 font-medium text-white"
            >
              <span className="hidden md:inline">Get your tickets</span>

              <ArrowRight size={24} className="lg:hidden" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
