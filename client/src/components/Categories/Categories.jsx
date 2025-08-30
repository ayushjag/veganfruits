
import React from 'react'
import { categories } from "../../utils/data";
import CategoryItem from "../CategoryItem/CategoryItem";
const Categories = () => {
  return (
    <div className="categories" style={{ width: "100%" }}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Categories