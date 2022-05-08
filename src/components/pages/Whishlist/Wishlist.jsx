import { useStore } from "../../../store/app-store-context";
import ProductCard from "../../Common/Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import "./whishlist.css";
const Wishlist = () => {
  const { wishlist, actions, cart } = useStore();
  const { removeFromWishlist, addToCart } = actions;
  const cardItemsId = cart.map((product) => product._id);
  const mergedList = wishlist.map((product) => {
    const newProduct = { ...product };
    if (cardItemsId.indexOf(product._id) >= 0) {
      newProduct.addedToCart = true;
    }
    return newProduct;
  });
  if (wishlist.length === 0) {
    return (
      <div className="cart__container main">
        <section className="cart__title">
          <h3>
            Your Wishlist is Empty. Browse
            <Link
              className="cart_action btn__link btn__link--primary"
              to="/products"
            >
              products
            </Link>
          </h3>
        </section>
      </div>
    );
  }
  return (
    <div className="wishlist_container main ">
      <section className="wishlist__title my-8">
        <h3>My Wishlist </h3>
      </section>
      <div className="wishlist__container flex-wrap">
        {mergedList.map((product) => (
          <ProductCard
            key={product._id}
            wishlist={true}
            {...product}
            addToWishlist={() => {}}
            removeFromWishlist={removeFromWishlist.bind(null, product)}
            addToCart={() => addToCart.bind(null, product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
