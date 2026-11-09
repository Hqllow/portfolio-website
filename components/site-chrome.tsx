"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import KeyboardShortcuts from "@/components/keyboard-shortcuts";
import { Toaster } from "react-hot-toast";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isModsPage = pathname === "/mods";

  return (
    <>
      {!isModsPage && <Header />}
      {children}
      {!isModsPage && <Footer />}

      <Toaster position="top-right" />
      {!isModsPage && <KeyboardShortcuts />}
    </>
  );
}
