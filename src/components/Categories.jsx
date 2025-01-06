import "../css/Categories.css";

export default function Categories({ name, filterCategory, typeid }) {
  const clickType = (type) => {
    filterCategory(type);
  };

  return (
    <button onClick={() => clickType(typeid)} className="categoryList">
      <p>{name}</p>
    </button>
  );
}
