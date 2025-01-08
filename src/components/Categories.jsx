import "../css/Categories.css";

export default function Categories({ name, typeId, fetchProducts }) {

  return (
    <button onClick={() => fetchProducts(typeId)} className="categoryList">
      <p>{name}</p>
    </button>
  );
}
