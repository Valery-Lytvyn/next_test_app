import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import CustomButton from "@/components/customButton/CustomButton";
import { portfolioItems } from "./data";
import { notFound } from "next/navigation";

interface Category {
  category: "applications" | "illustrations" | "websites";
}

interface CategoryProps {
  params: Category;
}

const getCategoryData = (
  categoryName: "applications" | "illustrations" | "websites"
) => {
  const data = portfolioItems[categoryName];
  if (data) {
    return data;
  }
  return notFound();
};
function Category({ params }: CategoryProps) {
  const categoryData = getCategoryData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>{params.category}</h1>

      {categoryData.map(({ id, title, desc, image }) => (
        <div className={styles.item} key={id}>
          <div className={styles.content}>
            <h2 className={styles.contentTitle}>{title}</h2>
            <p className={styles.contentDescription}>{desc}</p>
            <CustomButton title="See more" />
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={image}
              alt={title}
              fill={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
