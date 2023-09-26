"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Header() {
  const currentRoute = usePathname();

  return (
    <header className="p-2 space-x-3 border rounded-full">
      <Button
        variant={currentRoute === "/" ? "secondary" : "ghost"}
        className="rounded-full"
        asChild
      >
        <Link href="/">Inicio</Link>
      </Button>
      <Button
        variant={currentRoute === "/about" ? "secondary" : "ghost"}
        className="rounded-full"
        asChild
      >
        <Link href="/about">Sobre</Link>
      </Button>
    </header>
  );
}
