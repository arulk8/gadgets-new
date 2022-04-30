import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import phone from "../../../assets/images/818Vg6xfy7LSY606.png";
import laptop from "../../../assets/images/610oaBCrXLSL1310.png";
import earPhone from "../../../assets/images/imafwrggkh8uf8uc.png";
import smartWatch from "../../../assets/images/apple-watch.png";
import hero from "../../../assets/images/hero-img.png";
import promoLeft from "../../../assets/images/rog.png";
import promoRight from "../../../assets/images/apple.png";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="banner__container">
        <div className="flex-row flex-jc-se">
          <Link
            to="/products/phone"
            className="banner card card__v no-underline"
          >
            <img className="card__image" src={phone} alt="Phone" />
            <span className="banner__text"> Phone </span>
          </Link>
          <Link
            to="/products/laptop"
            className="banner card card__v no-underline"
          >
            <img className="card__image" src={laptop} alt="Laptop" />
            <span className="banner__text"> Laptop </span>
          </Link>
          <Link
            to="/products/headphone"
            className="banner card card__v no-underline"
          >
            <img className="card__image" src={earPhone} alt="Ear Phone" />
            <span className="banner__text"> Ear Phone </span>
          </Link>
          <Link
            to="/products/watch"
            className="banner card card__v no-underline"
          >
            <img className="card__image" src={smartWatch} alt="" />
            <span className="banner__text"> Smart Watch</span>
          </Link>
        </div>
      </section>
      <section className="flex-row flex-jc">
        <button
          className="btn btn__primary my-5"
          onClick={() => navigate("/products")}
        >
          View Products
        </button>
      </section>
      <section className="hero__section">
        <img src={hero} className="img img-fluid" alt="image with laptop" />
      </section>
      <section className="promotion__container flex-jc-sb">
        <Link to="./products" className="promo no-underline">
          <div className="card card__h flex-row ">
            <header className="card__header flex-column flex-aic flex-jc">
              <img src={promoLeft} alt="asus" className="card__image" />
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
          </div>
        </Link>
        <Link to="/products" className="promo no-underline">
          <div className="card card__h flex-row ">
            <header className="card__header flex-column flex-aic flex-jc">
              <img src={promoRight} alt="Macbook Air" className="card__image" />
            </header>
            <main className="promo_content flex-column flex-jc-sb">
              <h5>NEW ARRIVALS</h5>
              <div>
                <h2 className="vgutter-lg">MacBook Air</h2>
                <div>
                  <h5>
                    Professional-quality editing to action-packed gaming with
                    ease
                  </h5>
                  <div>Astoundingly powerful, Intuitive & Feature rich</div>
                </div>
              </div>
            </main>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Home;
