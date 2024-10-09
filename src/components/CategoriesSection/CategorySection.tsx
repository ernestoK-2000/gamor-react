import React from "react";
import "./CategorySection.css";
import CategoryCard from "../CategoryCard/CategoryCard";
import { trendingCategories } from "../../models/models";

function CategorySection() {
  let categories = trendingCategories.map((c, i) => (
    <CategoryCard
      key={c.name}
      num={i + 1}
      name={c.name}
      color={c.color}
      url={c.url}
      photo={c.photo}
    ></CategoryCard>
  ));
  return (
    <div id="category-section">
      <div className="category-section-title">Trending categories</div>
      <div className="category-container">
        {categories}
        <CategoryCard
          key={"todo"}
          num={categories.length + 1}
          name="All categories"
          url=""
        />
      </div>
    </div>
  );
}

export default CategorySection;
