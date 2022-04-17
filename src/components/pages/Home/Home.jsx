import { Link } from "react-router-dom";
import { useStore } from "../../../store/app-store-context";
import "./Home.css";
const Home = () => {
  const {} = useStore();
  return (
    <>
      <section className="banner__container">
        <div className="flex-row flex-jc-se">
          <Link
            to="/products/phone"
            className="banner card card__v no-underline"
          >
            <img
              className="card__image"
              src="./assets/white-headphone.jpg"
              alt=""
            />
            <span className="banner__text"> Phone </span>
          </Link>
          <Link
            to="/products/laptop"
            className="banner card card__v no-underline"
          >
            <img
              className="card__image"
              src="./assets/white-headphone.jpg"
              alt=""
            />
            <span className="banner__text"> Phone </span>
          </Link>
          <Link
            to="/products/headphone"
            className="banner card card__v no-underline"
          >
            <img
              className="card__image"
              src="./assets/white-headphone.jpg"
              alt=""
            />
            <span className="banner__text"> Phone </span>
          </Link>
          <Link
            to="/products/watch"
            className="banner card card__v no-underline"
          >
            <img
              className="card__image"
              src="./assets/white-headphone.jpg"
              alt=""
            />
            <span className="banner__text"> Phone </span>
          </Link>
        </div>
      </section>
      <section className="hero__section">
        <img
          src="./assets/hero_sale.jfif"
          className="img img-fluid"
          alt="image with laptop"
        />
      </section>
      <section className="promotion__container flex-jc-sb">
        <a
          href="./products/index.html"
          className="card card__h flex-row promo no-underline"
        >
          <header className="card__header flex-column flex-aic flex-jc">
            <img
              src="./assets/laptop.jpeg"
              alt="asus"
              className="card__image"
            />
            <div className="card__overlay flex-row flex-aic flex-jc hide">
              Out of Stock
            </div>
          </header>
          <main className="promo_content flex-column flex-jc-sb">
            <h5>NEW ARRIVALS</h5>
            <div>
              <h2 className="vgutter-lg">ROG Zephyrus</h2>
              <div>
                <h5>Content Creation on the Go</h5>
                <div>Checkout out our best line of innovation</div>
              </div>
            </div>
          </main>
        </a>
        <a
          href="./products/index.html"
          className="card card__h flex-row promo no-underline"
        >
          <header className="card__header flex-column flex-aic flex-jc">
            <img
              src="./assets/apple.jpg"
              alt="Macbook Air"
              className="card__image"
            />
            <div className="card__overlay flex-row flex-aic flex-jc hide">
              Out of Stock
            </div>
          </header>
          <main className="promo_content flex-column flex-jc-sb">
            <h5>NEW ARRIVALS</h5>
            <div>
              <h2 className="vgutter-lg">MacBook Air</h2>
              <div>
                <h5>
                  Professional-quality editing to action-packed gaming with ease
                </h5>
                <div>Astoundingly powerful, Intuitive & Feature rich</div>
              </div>
            </div>
          </main>
        </a>
      </section>
    </>
  );
};

export default Home;
