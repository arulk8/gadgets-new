import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart__container container main">
      <section className="cart__title">
        <h3>My Cart (2)</h3>
      </section>
      <div className="cart__items-price">
        <section className="cart__items flex-column flew-jc">
          <section className="card card__h flex-row">
            <header className="card__header flex-column flex-aic flex-jc">
              <div className="badge-icon__container flex-row flex-aic">
                <span className="card__badge font-light hide">Limited</span>
              </div>

              <img
                src="../assets/white-headphone.jpg"
                alt="white headphone"
                className="card__image"
              />
              <div className="card__overlay flex-row flex-aic flex-jc hide">
                Out of Stock
              </div>
            </header>
            <main className="card__body">
              <div className="card__content">
                <h2 className="font-normal">Sony Bass Head phone</h2>
                <h3 className="font-bold">₹ 2000</h3>
              </div>
              <div className="card__controls flex-row flex-jc flex-aic">
                <button className="btn__float btn__float--error box-shadow">
                  <i className="fas fa-minus"></i>
                </button>
                <span>5</span>
                <button className="btn__float btn__float--success box-shadow">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <footer className="card__footer">
                <div className="card__buttons">
                  <button className="card__button btn__add--cart font-medium vgutter-xs">
                    Remove from Cart
                  </button>
                  <button className="card__button primary b-primary font-medium">
                    Save to Whishlist
                  </button>
                </div>
              </footer>
            </main>
          </section>
        </section>

        <section className="cart__price flex-column">
          <div className="cart__heading divider__line">
            <h4>PRICE DETAILS</h4>
          </div>
          <div className="cart__invoice flex-row">
            <h5>Price (2 items)</h5>
            <div className="h5 cart__invoice--price">₹4000</div>
          </div>
          <div className="cart__invoice flex-row">
            <h5>Discount</h5>
            <div className="h5 cart__invoice--price">-₹800</div>
          </div>
          <div className="cart__invoice flex-row">
            <h5>Delivery Charges</h5>
            <div className="h5 cart__invoice--price">₹400</div>
          </div>
          <div className="divider__line"></div>
          <div className="cart__invoice flex-row divider__line">
            <h4>TOTAL AMOUNT</h4>
            <div className="h4 cart__invoice--price">₹3600</div>
          </div>
          <div className="my-5">
            <h6>You will save ₹400 from this order</h6>
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
