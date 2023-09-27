"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main className="flex flex-col items-start justify-start w-full pt-5 mb-auto">
      <Image
        src="https://github.com/muurilo.png"
        width={60}
        height={60}
        className="p-1 border border-dashed rounded-xl border-muted-foreground"
        alt="Minha foto de perfil"
      />
      <section className="my-5">
        <h1 className="text-xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
          {t("title")}
        </h1>
        <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
          {t("description")}
        </p>
        <hr />
        <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
          {t("contact")}{" "}
          <Button
            variant="link"
            className="p-0 text-sm font-medium leading-none text-primary"
            asChild
          >
            <Link
              aria-label="Me envie um email"
              href="mailto:hello@muurilo.xyz"
            >
              hello@muurilo.xyz
            </Link>
          </Button>
        </p>

        <div className="flex space-x-2">
          <Link
            href="https://github.com/Muurilo"
            target="_blank"
            aria-label="Acesse meu perfil no GitHub"
          >
            <GitHubLogoIcon className="w-6 h-6 text-muted-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muurilo/"
            aria-label="Acesse meu perfil no LinkedIn"
            target="_blank"
          >
            <LinkedInLogoIcon className="w-6 h-6 text-muted-foreground" />
          </Link>
        </div>
      </section>
    </main>
  );
}
