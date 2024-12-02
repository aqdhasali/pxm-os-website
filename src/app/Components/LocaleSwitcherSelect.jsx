"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";
import { useParams } from "next/navigation";

export default function LocaleSwitcherSelect({
  children,
  defualtValue,
  label,
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  }

  return (
    <label
      className={`relative text-gray-800 ${
        isPending ? "transition-opacity [&:disabled]:opacity-30" : ""
      }`}
    >
      <p className="sr-only">{label}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={defualtValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]"></span>
    </label>
  );
}
