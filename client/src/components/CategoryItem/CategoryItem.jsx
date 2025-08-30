
import { useNavigate } from "react-router-dom";
import "./CategoryItem.css";


const CategoryItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="categoryItem" onClick={() => { navigate(`/products/${item.cat}`) }}>
      <h1>{item.title}</h1>
    </div>
  );
};


export default CategoryItem;
