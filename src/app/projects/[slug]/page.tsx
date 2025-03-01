import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

async function getSlug(params: any): Promise<string> {
  const resolvedParams = params instanceof Promise ? await params : params;
  return resolvedParams.slug;
}

export async function generateMetadata(props: any): Promise<Metadata> {
  const slug = await getSlug(props.params);
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

export default async function SingleProjectPage(props: any) {
  const slug = await getSlug(props.params);
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