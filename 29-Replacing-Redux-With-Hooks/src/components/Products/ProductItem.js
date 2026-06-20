
import { useStore } from "./../../hooks-store/store";
import Card from "../UI/Card";
import "./ProductItem.css";
import { memo } from "react";

const ProductItem = memo(({ id ,isFav, title, description }) => {

  const [, dispatch] = useStore(false)

  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAV" , id)
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={isFav ? "is-fav" : ""}>{title}</h2>
        <p>{description}</p>
        <button
          className={!isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
})

export default ProductItem;
