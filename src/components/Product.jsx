import { useParams } from "react-router-dom";
import data from "../data.json";

export default function product() {
  const param = useParams();
  console.log(param.id);

  return (
    <div className="inproduct">
      <h1>in product</h1>
    </div>
  );
}
