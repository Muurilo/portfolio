"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <main className="flex flex-col justify-start w-full pt-5 mb-auto space-y-5">
      <h1 className="text-lg font-semibold tracking-tight scroll-m-20">
        {t("history.title")}
      </h1>
      <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
        {t("history.text")}
      </p>
      <h1 className="text-lg font-semibold tracking-tight scroll-m-20">
        {t("skills.title")}
      </h1>
      <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
        {t("skills.text")}
      </p>
      <h1 className="text-lg font-semibold tracking-tight scroll-m-20">
        {t("now.title")}
      </h1>
      <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
        {t("now.text")}
      </p>
    </main>
  );
}
