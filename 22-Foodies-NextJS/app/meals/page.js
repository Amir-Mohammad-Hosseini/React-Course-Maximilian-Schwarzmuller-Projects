import Link from "next/link";
import cssClasses from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";

export const metadata = {
  title : "All Meals" ,
  description : "Browse the delicious meals shared by our vibrant community."
}

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};
const MealsPage = () => {
  return (
    <>
      <header className={cssClasses.header}>
        <h1>
          Delicious meals,created{" "}
          <span className={cssClasses.highlight}>by you</span>
        </h1>
        <p>
          Choose your favirite recipe and cook it yourself,It is easy and fun!
        </p>
        <p className={cssClasses.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={cssClasses.main}>
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
