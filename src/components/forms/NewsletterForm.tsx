"use client";

import clsx from "clsx";
import { useState } from "react";

export const NewsletterForm = ({
  size = "medium",
}: {
  size?: "small" | "medium";
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
    <form onSubmit={handleEmailCapture} className="w-full max-w-lg">
      <div
        className={clsx(
          "flex flex-col items-center rounded-xl border border-gray-200 bg-white p-1 shadow-sm lg:gap-2",
          { "md:flex-row md:rounded-full": size === "medium" },
        )}
      >
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="your@email.com"
          className={clsx(
            "mb-2 w-full flex-grow rounded-lg bg-transparent px-4 py-3 text-gray-500 placeholder-gray-400 focus:outline-none sm:mb-0",
            { "sm:w-auto md:rounded-full lg:py-4": size === "medium" },
          )}
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={clsx(
            "w-full rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-800 lg:py-4",
            { "sm:w-auto md:rounded-full": size === "medium" },
          )}
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};
