import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ThemeProvider } from "next-themes";
import NextTopLoader from 'nextjs-toploader';
import {
  IconArticle,
  IconBolt,
  IconBrandGithub,
  IconBrandX,
  IconBriefcase2,
  IconExchange,
  IconHome,
  IconMail,
  IconMessage2,
  IconNewSection,
  IconClipboardText,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },

  {
    title: "About",
    icon: (
      <IconMessage2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/about",
  },
  {
    title: "Projects",
    icon: (
      <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/projects",
  },
  
  {
    title: "Contact",
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/contact",
  },
  
  {
    title: "Resume",
    icon: (
      <IconClipboardText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/resume.pdf",
    target : "_blank",
    rel : "noopener noreferrer"
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/siva_dheeraj_",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Sivadheeraj5356",
  },
  
  
]
export const metadata: Metadata = {
  title: "Siva Dheeraj",
  description:
    "Siva Dheeraj is a developer. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
      <ThemeProvider attribute="class" themes={["light", "dark"]} defaultTheme="dark">
      <NextTopLoader    color="#0ea5e9" easing="ease-in-out" showSpinner={false} />
        <Sidebar />
        <div className=" bg-black flex-1 overflow-y-auto">
          <div className="flex-1 bg-black min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-700 overflow-y-auto">
            {children}
            <Footer />
            <div className="flex items-center justify-center fixed bottom-5 scale-125 z-999 w-full">
      <FloatingDock
        items={links}
      />
    </div>
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
