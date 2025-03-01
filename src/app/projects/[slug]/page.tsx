import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

// Remove the custom type definition entirely

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug) as Product | undefined;

  return product
    ? {
        title: product.title,
        description: product.description,
      }
    : {
        title: "Projects | Siva Dheeraj",
        description:
          "Siva Dheeraj is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
      };
}

// Let Next.js infer the types from its own generated definitions
export default async function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
    return null; // Prevents rendering after redirect
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}