"use client";

import { Footer } from "./footer";
import Header from "./header";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center min-h-screen pt-10 mx-6 md:mx-44 lg:mx-96">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
