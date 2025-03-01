import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { SparklesCore } from "@/components/ui/sparkles";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo"
import  ContactFooter  from "@/components/ContactFooter"
import CardSection from "@/components/CardSection"


export default function Home() {
  return (
    <>
    <Container>
    <div className="flex flex-col">
      <div className="flex ">
      <div className=" w-full text-center inline-block text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none mt-36"> Siva Dheeraj</div>
      </div>
     
      <div className="flex">
      <div className="w-full inline-block mt-4  text-2xl text-center">
        I&apos;m a full-stack developer that loves{" "}
       building products and web apps that impact
      </div>
      {/* <Paragraph className="max-w-xl mt-4">
      A Software Developer specializing in frontend and mobile app development.

I thrive on challenges, passionate about learning new skills, and dedicated to writing clean, professional code.


      </Paragraph> */}
      </div>
      
      <div className="w-[0rem] sm:w-[55rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

      </div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-3xl lg:text-4xl mt-20 mb-4"
      >
        Projects 
      </Heading>
      <Products />
      <TechStack />
      </div>
    </Container>
    <CardSection />
      <InfiniteMovingCardsDemo />
      <ContactFooter  />
    
    </>
  );
}
