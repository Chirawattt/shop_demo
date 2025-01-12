import { useNavigate } from "react-router-dom";
import "../css/Categories.css";

export default function Categories({ name, typeId, selectedButton, setSelectedButton }) {
  const navigate = useNavigate();
  
  const handleCategoryClick = (typeId) => {
    navigate(`/allproducts/${typeId}`);
    // Only call setSelectedButton if it exists
    if (typeof setSelectedButton === "function") 
      setSelectedButton(typeId);
  }

  return (
    <button onClick={() => handleCategoryClick(typeId)} className={selectedButton === typeId ? "categoryActive" : "categoryList"}>
      {name}
    </button>
  );
}
