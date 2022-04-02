import React from "react";
import "./product-card.css";
import laptop from "../../../../assests/img/apple.jpg";
const ProductCard = (props) => {
  const { name, brand, price } = props;
  return (
    <section className="card card__v">
      <header className="card__header flex-column flex-aic flex-jc">
        <div className="badge-icon__container flex-row flex-aic">
          <span className="card__icons flex-column">
            <button className="btn__icon font-semibold btn__icon--danger hide">
              <i className="far fa-times-circle"></i>
            </button>
            <button className="btn__icon font-semibold btn__icon--danger">
              <i className="far fa-heart"></i>
            </button>
          </span>
        </div>

        <img src={laptop} alt={name} className="card__image" />
      </header>
      <main className="card__body">
        <div className="card__content flex-column flex-jc flex-aic">
          <h3 className="font-normal">
            {brand} {name}
          </h3>
          <h4 className="font-bold">₹ {price}</h4>
        </div>
        <footer className="card__footer">
          <div className="card__buttons">
            <button className="card__button btn__go--cart font-medium">
              Add to cart
            </button>
          </div>
        </footer>
      </main>
    </section>
  );
};

export default ProductCard;
