import { configure } from "@happykit/flags/config";

configure({
  envKey:
    process.env.NEXT_PUBLIC_FLAGS_ENVIRONMENT_KEY ||
    "flags_pub_development_319315605032272467",
});
