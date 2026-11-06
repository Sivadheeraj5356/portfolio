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
    target : "_blank"
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Sivadheeraj5356",
    target : "_blank"
  },
  
  
]
export const metadata: Metadata = {
  metadataBase: new URL("https://sivadheeraj.vercel.app"),
  title: {
    default: "Siva Dheeraj | Full-Stack Developer",
    template: "%s | Siva Dheeraj",
  },
  description:
    "Siva Dheeraj is a full-stack developer and founding engineer at Applied Work, building LLM systems, agent evaluations, GTM tooling and web products. Based in Surat, India.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://sivadheeraj.vercel.app/",
    siteName: "Siva Dheeraj",
    title: "Siva Dheeraj | Full-Stack Developer",
    description:
      "Full-stack developer and founding engineer at Applied Work. LLM systems, agent evaluations, GTM tooling and web products.",
  },
  twitter: {
    card: "summary",
    title: "Siva Dheeraj | Full-Stack Developer",
    description:
      "Full-stack developer and founding engineer at Applied Work. LLM systems, agent evaluations, GTM tooling and web products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Siva Dheeraj",
            alternateName: "Siva Dheeraj Ethamsetti",
            jobTitle: "Founding Engineer",
            worksFor: { "@type": "Organization", name: "Applied Work", url: "https://appliedwork.ai" },
            description: "Full-stack developer building LLM systems, agent evaluations, GTM tooling and web products.",
            address: { "@type": "PostalAddress", addressLocality: "Surat", addressCountry: "IN" },
            url: "https://sivadheeraj.vercel.app/",
            sameAs: [
              "https://github.com/Sivadheeraj5356",
              "https://www.linkedin.com/in/sivadheeraj",
              "https://sivadheeraj5356.github.io/3d-portfolio/",
            ],
          }),
        }}
      />
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
