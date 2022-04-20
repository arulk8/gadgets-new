import { useStore } from "../../../store/app-store-context";
import "./whishlist.css";
const Wishlist = () => {
  const { addToWishlist } = useStore();
  return (
    <div className="container main ">
      <section className="wishlist__title my-8">
        <h3>My Wishlist</h3>
      </section>
      <div className="wishlist__container flex-wrap">
        <section className="card card__v">
          <header className="card__header flex-column flex-aic flex-jc">
            <div className="badge-icon__container flex-row flex-aic">
              <span className="card__badge font-light">Limited</span>
              <span className="card__icons flex-column">
                <button className="btn__icon font-semibold btn__icon--danger hide">
                  <i className="far fa-times-circle"></i>
                </button>
                <button className="btn__icon font-semibold btn__icon--danger">
                  <i className="fas fa-heart"></i>
                </button>
              </span>
            </div>

            <img
              src="../assets/white-headphone.jpg"
              alt="white headphone"
              className="card__image"
            />
            <div className="card__overlay hide flex-row flex-aic flex-jc">
              Out of Stock
            </div>
          </header>
          <main className="card__body">
            <div className="card__content">
              <h2 className="font-normal">Sony Bass Head phone</h2>
              <h3 className="font-bold">₹ 2000</h3>
            </div>
            <footer className="card__footer">
              <div className="card__buttons">
                <button className="card__button btn__add--cart font-medium">
                  Add to Cart
                </button>
              </div>
            </footer>
          </main>
        </section>
        <section className="card card__v">
          <header className="card__header flex-column flex-aic flex-jc">
            <div className="badge-icon__container flex-row flex-aic">
              <span className="card__badge font-light">Limited</span>
              <span className="card__icons flex-column">
                <button className="btn__icon font-semibold btn__icon--danger hide">
                  <i className="far fa-times-circle"></i>
                </button>
                <button className="btn__icon font-semibold btn__icon--danger">
                  <i className="fas fa-heart"></i>
                </button>
              </span>
            </div>

            <img
              src="../assets/white-headphone.jpg"
              alt="white headphone"
              className="card__image"
            />
            <div className="card__overlay hide flex-row flex-aic flex-jc">
              Out of Stock
            </div>
          </header>
          <main className="card__body">
            <div className="card__content">
              <h2 className="font-normal">Sony Bass Head phone</h2>
              <h3 className="font-bold">₹ 2000</h3>
            </div>
            <footer className="card__footer">
              <div className="card__buttons">
                <button className="card__button btn__add--cart font-medium">
                  Add to Cart
                </button>
              </div>
            </footer>
          </main>
        </section>
        <section className="card card__v">
          <header className="card__header flex-column flex-aic flex-jc">
            <div className="badge-icon__container flex-row flex-aic">
              <span className="card__badge font-light">Limited</span>
              <span className="card__icons flex-column">
                <button className="btn__icon font-semibold btn__icon--danger hide">
                  <i className="far fa-times-circle"></i>
                </button>
                <button className="btn__icon font-semibold btn__icon--danger">
                  <i className="fas fa-heart"></i>
                </button>
              </span>
            </div>

            <img
              src="../assets/white-headphone.jpg"
              alt="white headphone"
              className="card__image"
            />
            <div className="card__overlay hide flex-row flex-aic flex-jc">
              Out of Stock
            </div>
          </header>
          <main className="card__body">
            <div className="card__content">
              <h2 className="font-normal">Sony Bass Head phone</h2>
              <h3 className="font-bold">₹ 2000</h3>
            </div>
            <footer className="card__footer">
              <div className="card__buttons">
                <button className="card__button btn__add--cart font-medium">
                  Add to Cart
                </button>
              </div>
            </footer>
          </main>
        </section>
        <section className="card card__v">
          <header className="card__header flex-column flex-aic flex-jc">
            <div className="badge-icon__container flex-row flex-aic">
              <span className="card__badge font-light">Limited</span>
              <span className="card__icons flex-column">
                <button className="btn__icon font-semibold btn__icon--danger hide">
                  <i className="far fa-times-circle"></i>
                </button>
                <button className="btn__icon font-semibold btn__icon--danger">
                  <i className="fas fa-heart"></i>
                </button>
              </span>
            </div>

            <img
              src="../assets/white-headphone.jpg"
              alt="white headphone"
              className="card__image"
            />
            <div className="card__overlay hide flex-row flex-aic flex-jc">
              Out of Stock
            </div>
          </header>
          <main className="card__body">
            <div className="card__content">
              <h2 className="font-normal">Sony Bass Head phone</h2>
              <h3 className="font-bold">₹ 2000</h3>
            </div>
            <footer className="card__footer">
              <div className="card__buttons">
                <button className="card__button btn__add--cart font-medium">
                  Add to Cart
                </button>
              </div>
            </footer>
          </main>
        </section>
        <section className="card card__v">
          <header className="card__header flex-column flex-aic flex-jc">
            <div className="badge-icon__container flex-row flex-aic">
              <span className="card__badge font-light">Limited</span>
              <span className="card__icons flex-column">
                <button className="btn__icon font-semibold btn__icon--danger hide">
                  <i className="far fa-times-circle"></i>
                </button>
                <button className="btn__icon font-semibold btn__icon--danger">
                  <i className="fas fa-heart"></i>
                </button>
              </span>
            </div>

            <img
              src="../assets/white-headphone.jpg"
              alt="white headphone"
              className="card__image"
            />
            <div className="card__overlay hide flex-row flex-aic flex-jc">
              Out of Stock
            </div>
          </header>
          <main className="card__body">
            <div className="card__content">
              <h2 className="font-normal">Sony Bass Head phone</h2>
              <h3 className="font-bold">₹ 2000</h3>
            </div>
            <footer className="card__footer">
              <div className="card__buttons">
                <button className="card__button btn__add--cart font-medium">
                  Add to Cart
                </button>
              </div>
            </footer>
          </main>
        </section>
        <section className="card card__v">
          <header className="card__header flex-column flex-aic flex-jc">
            <div className="badge-icon__container flex-row flex-aic">
              <span className="card__badge font-light">Limited</span>
              <span className="card__icons flex-column">
                <button className="btn__icon font-semibold btn__icon--danger hide">
                  <i className="far fa-times-circle"></i>
                </button>
                <button className="btn__icon font-semibold btn__icon--danger">
                  <i className="fas fa-heart"></i>
                </button>
              </span>
            </div>

            <img
              src="../assets/white-headphone.jpg"
              alt="white headphone"
              className="card__image"
            />
            <div className="card__overlay hide flex-row flex-aic flex-jc">
              Out of Stock
            </div>
          </header>
          <main className="card__body">
            <div className="card__content">
              <h2 className="font-normal">Sony Bass Head phone</h2>
              <h3 className="font-bold">₹ 2000</h3>
            </div>
            <footer className="card__footer">
              <div className="card__buttons">
                <button className="card__button btn__add--cart font-medium">
                  Add to Cart
                </button>
              </div>
            </footer>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Wishlist;
