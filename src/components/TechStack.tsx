import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Javascript",
      src: "/images/logos/js.svg",

      className: "h-20 w-20",
    },
    {
      title: "css",
      src: "/images/logos/css.svg",

      className: "h-20 w-20",
    },
    {
      title: "html",
      src: "/images/logos/html.svg",

      className: "h-20 w-20",
    },
    {
      title: "React.js",
      src: "/images/logos/react.svg",

      className: "h-20 w-20",
    },
    {
      title: "next",
      src: "/images/logos/next-js.svg",

      className: "h-20 w-20",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-20 w-16",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongo.svg",

      className: "h-20 w-24",
    },
    {
      title: "Node",
      src: "/images/logos/node-js.svg",

      className: "h-20 w-20",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.svg",

      className: "h-20 w-20",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.svg",

      className: "h-24 w-24",
    },
    {
      title: "Prisma",
      src: "/images/logos/prisma.svg",

      className: "h-24 w-20",
    },
    {
      title: "git",
      src: "/images/logos/git.svg",

      className: "h-24 w-20",
    },
    {
      title: "postgresql",
      src: "/images/logos/postgresql.svg",

      className: "h-24 w-20",
    },
    {
      title: "docker",
      src: "/images/logos/docker.svg",

      className: "h-24 w-20",
    },
    {
      title: "ts",
      src: "/images/logos/ts.svg",

      className: "h-24 w-20",
    },
    {
      title: "java",
      src: "/images/logos/java.svg",

      className: "h-24 w-20",
    },
    {
      title: "aws",
      src: "/images/logos/aws.svg",

      className: "h-24 w-20",
    },
    {
      title: "react-native",
      src: "/images/logos/react-native-1.svg",

      className: "h-24 w-28",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-3xl lg:text-4xl mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap sm:gap-7 max-sm:ml-5">
        {stack.map((item, index) => (
          <div className="flex items-center" key={index}>
          <Image
            src={item.src}
            key={index}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4 ", item.className)}
          />
          {/* <div className="md:w-32 w-20 text-3xl font-semibold">{item.title}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
