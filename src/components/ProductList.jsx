import { MdAddShoppingCart } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function ProductList({ desserts: dessert }) {
  return (
    <div className="desserts">
      <h1 className="desserts-title">Desserts</h1>
      <div className="dessertGrid">
        {dessert.map((d) => {
          const { name, id, price, image: thumbnail, category } = d;
          return (
            <div className="dessertCardWrapper" key={id}>
              <div className="dessertCard">
                <img
                  className="dessertCard-img"
                  src={thumbnail.desktop}
                  alt="image of product"
                />
                <button className="dessertCard-btn">
                  <MdAddShoppingCart className="icon" />
                  Add to Cart
                </button>
                <button className="dessertCardHidden-btn">
                  <CiCircleMinus className="iconMath" />
                  7<CiCirclePlus className="iconMath" />
                </button>
                <div className="dessertCard-body">
                  <p className="dessertCard-subtitle">{category}</p>
                  <h4 className="dessertCard-title">{name}</h4>
                  <p className="dessertCard-price">${price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
