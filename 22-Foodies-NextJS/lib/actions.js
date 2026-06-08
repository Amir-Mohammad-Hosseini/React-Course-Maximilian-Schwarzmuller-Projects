"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

export const shareMeal = async (prevState, formData) => {
  const mealDatas = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(mealDatas.title) ||
    isInvalidText(mealDatas.summary) ||
    isInvalidText(mealDatas.creator) ||
    isInvalidText(mealDatas.instructions) ||
    isInvalidText(mealDatas.creator_email) ||
    !mealDatas.creator_email.includes("@") ||
    !mealDatas.image ||
    mealDatas.image.size === 0
  ) {
    return { message: "Invalid input" };
  }
  await saveMeal(mealDatas);
  revalidatePath("/meals");
  redirect("/meals");
};
