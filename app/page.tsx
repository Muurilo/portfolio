"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start w-full pt-5 mb-auto">
      <Image
        src="https://github.com/muurilo.png"
        width={60}
        height={60}
        className="p-1 border border-dashed rounded-xl border-muted-foreground"
        alt="Picture of the author"
      />
      <section className="my-5">
        <h1 className="text-xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
          Murilo Cunha — Desenvolvedor Full-Stack
        </h1>
        <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
          Desenvolvo websites extraordinários, utilizando as mais recentes e
          avançadas tecnologias. Tenho uma paixão pela busca constante de novos
          conhecimentos, aprimorando minhas habilidades e explorando ferramentas
          inovadoras
        </p>
        <hr />
        <p className="leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
          Fale comigo{" "}
          <Button
            variant="link"
            className="p-0 text-sm font-medium leading-none text-primary"
            asChild
          >
            <Link href="mailto:hello@muurilo.xyz">hello@muurilo.xyz</Link>
          </Button>
        </p>

        <div className="flex space-x-2">
          <Link href="https://github.com/Muurilo" target="_blank">
            <GitHubLogoIcon className="w-5 h-5 text-muted-foreground" />
          </Link>
          <Link href="https://www.linkedin.com/in/muurilo/" target="_blank">
            <LinkedInLogoIcon className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>
      </section>
    </main>
  );
}
