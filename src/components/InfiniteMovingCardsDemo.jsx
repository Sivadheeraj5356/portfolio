"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <div className="text-4xl font-semibold mb-5">Testimonials</div>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>)
  );
}

const testimonials = [
  {
    quote:
      "Working with Siva Dheeraj was an absolute pleasure. They delivered a sleek, high-performing website that exceeded our expectations. Their attention to detail and problem-solving skills were outstanding!",
    name: "John Doe",
    title: "CEO at Tech Innovations",
  },
  {
    quote:
    "Siva Dheeraj is a highly skilled developer who brings innovative solutions to the table. Their ability to write clean and efficient code helped us launch our product on time",
    name: "Sarah Johnson",
    title: "Product Manager at CodeWave",
  },
  {
    quote: "The UI/UX design by Siva Dheeraj transformed our website into a user-friendly and visually stunning experience. They truly understand how to blend aesthetics with functionality",
    name: "Emily Carter",
    title: "Creative Director at DesignHub",
  },
  {
    quote:
      "From frontend to backend, Siva Dheeraj handled everything with professionalism and expertise. Their ability to integrate APIs and optimize performance made a huge difference in our platform",
    name: "Michael Brown",
    title: "CTO at StartupX",
  },
  {
    quote:"Siva Dheeraj was incredibly responsive and delivered exactly what I needed ahead of schedule. I highly recommend them for any web development project!",
    name: "Lisa Anderson",
    title: "Independent Business Owner",
  },
];
