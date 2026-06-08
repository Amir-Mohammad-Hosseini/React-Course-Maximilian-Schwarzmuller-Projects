import Image from "next/image";
import cssClasses from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export const generateMetadata = async ({ params }) => {
  const { slug: mealSlug } = await params;
  const mealDetails = await getMeal(mealSlug);

  if (!mealDetails) {
    notFound();
  }
  
  return {
    title: mealDetails.title,
    description: mealDetails.summary,
  };
};

const MealDetailsPage = async ({ params }) => {
  const { slug: mealSlug } = await params;
  const mealDetails = await getMeal(mealSlug);
  
  if (!mealDetails) {
    notFound();
  }
  mealDetails.instructions = mealDetails.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={cssClasses.header}>
        <div className={cssClasses.image}>
          <Image
            src={`/images/${mealDetails.image}`}
            alt={mealDetails.title}
            fill
          />
        </div>
        <div className={cssClasses.headerText}>
          <h1>{mealDetails.title}</h1>
          <p className={cssClasses.creator}>
            by{" "}
            <a href={`mailto:${mealDetails.creator__email}`}>
              {mealDetails.creator}
            </a>
          </p>
          <p className={cssClasses.summary}>{mealDetails.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={cssClasses.instructions}
          dangerouslySetInnerHTML={{
            __html: mealDetails.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
