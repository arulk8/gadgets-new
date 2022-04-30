import actionTypes from "../../../../store/actionTypes";
import "./CartCard.css";
const CartCard = (props) => {
  const {
    _id,
    name,
    brand,
    price,
    discount,
    img,
    qty,
    updateCartItem,
    deleteFromCart,
    addToWishlist,
    wishlisted,
    removeFromWishlist,
  } = props;
  const image = require(`../../../../assets/images/${img}.png`).default;
  const sellingPrice = !!discount
    ? price - Math.ceil((price * discount) / 100)
    : price;
  return (
    <section className="card card__h bg__o--white flex-row">
      <header className="card__header flex-column flex-aic flex-jc">
        <img src={image} alt={name} className="card__image" />
      </header>
      <main className="card__body">
        <div className="card__content">
          <h2 className="font-normal">
            {brand} {name}
          </h2>
          <div className="flex-row flex-aic card__info">
            <h3 className="font-normal">₹ {sellingPrice}</h3>
            {!!discount && (
              <span className="font-light line-through">₹ {price}</span>
            )}
          </div>
          {!!discount && (
            <h3 className="font-normal margin-auto--l">{discount}% OFF</h3>
          )}
        </div>
        <div className="card__controls flex-row flex-jc flex-aic">
          <button
            className="btn__float btn__float--error box-shadow"
            onClick={() =>
              updateCartItem({ _id, qty, action: actionTypes.REMOVE_CART_ITEM })
            }
          >
            {qty > 1 ? (
              <i className="fas fa-minus"></i>
            ) : (
              <i className="fas fa-trash"></i>
            )}
          </button>
          <span>{qty}</span>
          <button
            className="btn__float btn__float--success box-shadow"
            onClick={() =>
              updateCartItem({ _id, qty, action: actionTypes.ADD_CART_ITEM })
            }
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <footer className="card__footer">
          <div className="card__buttons">
            <button
              className="card__button btn__add--cart font-medium vgutter-xs"
              onClick={() => deleteFromCart({ _id })}
            >
              Remove from Cart
            </button>
            {wishlisted ? (
              <button
                className="card__button primary b-primary font-medium"
                onClick={removeFromWishlist}
              >
                Remove from Whishlist
              </button>
            ) : (
              <button
                className="card__button primary b-primary font-medium"
                onClick={addToWishlist}
              >
                Save to Whishlist
              </button>
            )}
          </div>
        </footer>
      </main>
    </section>
  );
};

export default CartCard;
