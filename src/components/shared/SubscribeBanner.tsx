"use client";

import { useState } from "react";

export const SubscribeBanner = ({
  title = "Stay Plugged-In!",
  subtitle = "Subscribe to our newsletter to stay up to date on all things SoPlugged.",
}: {
  title?: string;
  subtitle?: string;
}) => {
  const [userEmail, setUserEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailCapture = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      await fetch("/waitlist", {
        method: "POST",
        body: JSON.stringify({
          userEmail,
        }),
      });

      // await sleep(800);
      // toast.success("You've been added to the waitlist! 🎉");
      setUserEmail("");
    } catch (error) {
      console.error(error);
      // toast.error("An error occurred");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="bg-light text-black">
      <div className="padded page-section grid gap-8 lg:grid-cols-2">
        <div className="">
          <h2 className="mb-2">{title}</h2>
          <p>{subtitle}</p>
        </div>

        <form onSubmit={handleEmailCapture} className="w-full max-w-lg">
          <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-1 shadow-sm md:flex-row md:rounded-full lg:gap-2">
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="your@email.com"
              className="mb-2 w-full flex-grow rounded-lg bg-transparent px-4 py-3 text-gray-500 placeholder-gray-400 focus:outline-none sm:mb-0 sm:w-auto md:rounded-full lg:py-4"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 sm:w-auto md:rounded-full lg:py-4"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
