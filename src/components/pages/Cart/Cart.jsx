import { useStore } from "../../../store/app-store-context";
import { Link } from "react-router-dom";
import CartCard from "../../Common/Components/CartCard";

import "./Cart.css";

const Cart = () => {
  const { cart, actions, wishlist } = useStore();

  const { updateCartItem, deleteFromCart, addToWishlist, removeFromWishlist } =
    actions;
  const length = cart.length;
  const grandTotal = cart.reduce(
    (acc, item) => {
      const discountPrice = !!item.discount
        ? Math.ceil((item.price * item.discount) / 100) * item.qty
        : 0;
      const price = parseFloat(acc.price) + parseFloat(item.price) * item.qty;
      const totalQty = acc.totalQty + item.qty;
      return {
        price,
        totalQty,
        discount: acc.discount + discountPrice,
      };
    },
    { price: 0, discount: 0, totalQty: 0 }
  );

  const wishlistIds = wishlist.map((product) => product._id);
  const cartModified = cart.map((product) => {
    const newProduct = { ...product };
    if (wishlistIds.indexOf(product._id) >= 0) {
      newProduct.wishlisted = true;
    }
    return newProduct;
  });
  if (length === 0) {
    return (
      <div className="cart__container main">
        <section className="cart__title">
          <h3>
            The Cart is Empty. Browse
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
    <div className="cart__container main">
      <section className="cart__title">
        <h3>My Cart ({length})</h3>
      </section>
      <div className="cart__items-price">
        <section className="cart__items flex-column flew-jc">
          {cartModified.map((item) => (
            <CartCard
              key={item._id}
              deleteFromCart={deleteFromCart}
              {...item}
              updateCartItem={updateCartItem}
              addToWishlist={addToWishlist.bind(null, item)}
              removeFromWishlist={removeFromWishlist.bind(null, item)}
            />
          ))}
        </section>

        <section className="cart__price flex-column">
          <div className="cart__heading divider__line">
            <h4>PRICE DETAILS</h4>
          </div>
          <div className="cart__invoice flex-row">
            <h5>
              Price ({length === 1 ? "1 item" : `${grandTotal.totalQty} items`})
            </h5>
            <div className="h5 cart__invoice--price">₹ {grandTotal.price}</div>
          </div>
          <div className="cart__invoice flex-row">
            <h5>Discount</h5>
            <div className="h5 cart__invoice--price">
              - ₹ {grandTotal.discount}
            </div>
          </div>
          <div className="cart__invoice flex-row">
            <h5>Delivery Charges</h5>
            <div className="h5 cart__invoice--price">₹ 600</div>
          </div>
          <div className="divider__line"></div>
          <div className="cart__invoice flex-row divider__line">
            <h4>Total Amount</h4>
            <div className="h4 cart__invoice--price">
              ₹ {grandTotal.price - grandTotal.discount + 600}
            </div>
          </div>
          <div className="my-5">
            <h6>You will save ₹ {grandTotal.discount - 600} from this order</h6>
          </div>
          <div className="my-5">
            <button className="card__button primary b-primary font-medium vgutter-xs">
              Place Order
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
