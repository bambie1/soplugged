"use client";

import { ArrowRightIcon } from "@sanity/icons";
import { motion } from "framer-motion";

import { getFileUrl } from "@/sanity/lib/client";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const VideoHero = ({ content }: { content: any }) => {
  const videoUrl = content.video?.asset?._ref
    ? getFileUrl(content.video.asset._ref)
    : "";

  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
          poster="/fallback.jpeg"
        />
      </motion.div>

      <div className="relative flex min-h-[60vh] flex-col bg-black bg-opacity-50 lg:min-h-[700px]">
        {/* Overlays */}
        <div className="absolute inset-0">
          <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-black" />
        </div>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="padded z-10 flex flex-1 pb-10 pt-64 xl:pt-64"
        >
          <div className="mr-auto mt-auto h-full lg:w-3/4">
            <motion.h1
              variants={fadeInUp}
              className="mb-4 text-5xl font-semibold xl:text-7xl"
            >
              {content.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="font-light lg:w-3/4 lg:text-lg"
            >
              At SoPlugged, we're committed to empowering Black entrepreneurs
              through useful business resources, networking opportunities and
              lots more!
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8">
              <button className="flex items-center gap-2 rounded-full bg-white p-4 font-semibold text-black">
                {content.cta?.label}

                <ArrowRightIcon className="h-6 w-6" />
              </button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
