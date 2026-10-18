import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/dried-fruits.jpg";
import { BulletGrid, Note, PageHero, QuoteCTA, Section, SpecTable } from "@/components/site/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/dried-fruits")({
  head: () => seo("Dried Fruit Exports from Kenya, VonSchelling", "Dried mango, pineapple, banana and papaya with clear specifications for importers, wholesalers and food businesses."),
  component: () => (
    <>
      <PageHero image={img} eyebrow="Products · Dried Fruits" title="Dried Fruits. Carefully Sourced. Clearly Specified." intro="Suitable dried fruit products for importers, wholesalers, distributors and food businesses seeking reliable supply and clearly defined specifications." />
      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          <BulletGrid title="Potential range" items={["Dried mango.", "Dried pineapple.", "Dried banana.", "Dried papaya and other suitable tropical fruits."]} />
          <BulletGrid title="What we specify" items={[
            "Fruit varieties, origin and processing method.",
            "Ingredients, including any added sugar, preservatives or additives.",
            "Moisture, water activity, microbiological and contaminant controls.",
            "Packaging, shelf life, storage and transport conditions.",
            "Ingredient, nutrition and allergen declarations where required.",
            "Food-safety standards, testing and destination requirements.",
          ]} />
        </div>
        <div className="mt-16">
          <SpecTable title="Dried Fruit Specification Sheet" rows={[
            ["Products", "Kent/Apple Mango, Smooth Cayenne Pineapple, Cavendish Banana, Solo Papaya"],
            ["Preservation", "100% natural, Sugar-free, Moisture content controlled to 15-18% max"],
          ]} />
        </div>
        <div className="mt-16"><Note>We clearly distinguish plain dried fruit from sweetened, preserved or otherwise processed fruit; buyers know exactly what they are purchasing.</Note></div>
      </Section>
      <QuoteCTA title="Request Dried Fruit Specifications" />
    </>
  ),
});
