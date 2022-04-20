import React from "react";
import { useNavigate } from "react-router-dom";
import "./product-card.css";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const {
    name,
    brand,
    price,
    addToWishlist,
    removeFromWishlist,
    wishlist,
    addToCart,
    addedToCart,
    rating,
    category,
    discount,
    img,
  } = props;
  const image = require(`../../../../assets/images/${img}.png`).default;
  const wishListClassName = "fa-heart " + (wishlist ? "fas" : "far");
  const addOrRemoveWishlist = wishlist ? removeFromWishlist : addToWishlist;
  const sellingPrice = !!discount
    ? price - Math.ceil((price * discount) / 100)
    : price;
  return (
    <section className="card card__v">
      <header className="card__header flex-column flex-aic flex-jc">
        <div className="badge-icon__container flex-row flex-aic">
          <span className="card__icons flex-column">
            <button className="btn__icon font-semibold btn__icon--danger hide">
              <i className="far fa-times-circle"></i>
            </button>
            <button
              className="btn__icon font-semibold btn__icon--danger"
              onClick={addOrRemoveWishlist}
            >
              <i className={wishListClassName}></i>
            </button>
          </span>
        </div>

        <img src={image} alt={name} className="card__image" />
      </header>
      <main className="card__body">
        <div className="card__content">
          <div className="rating_section">
            <div className="rating__btn active">
              <span className="font-medium rating--good">{rating}</span>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <h2 className="font-normal">
            {brand} {name}
          </h2>
          <div className="flex-row flex-aic card__info">
            <h3 className="font-normal">₹ {sellingPrice}</h3>
            {!!discount && (
              <span className="font-light line-through">₹ {price}</span>
            )}
            {!!discount && (
              <h3 className="font-normal margin-auto--l">{discount}% OFF</h3>
            )}
          </div>
        </div>
        <footer className="card__footer">
          <div className="card__buttons">
            {addedToCart ? (
              <button
                onClick={() => navigate("/cart")}
                className="card__button btn__go--cart font-medium"
              >
                Go to Cart
              </button>
            ) : (
              <button
                onClick={addToCart}
                className="card__button btn__go--cart font-medium"
              >
                Add to Cart
              </button>
            )}
          </div>
        </footer>
      </main>
    </section>
  );
};

export default ProductCard;
