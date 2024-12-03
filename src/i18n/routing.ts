import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

// Exporting locales explicitly
export const locales = ["en", "sin","ar"];

export const routing = defineRouting({
    locales, // Reusing the `locales` array here
    defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);