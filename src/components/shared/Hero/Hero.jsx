import layoutStyles from "../../layout/Layout/Layout.module.css";
import heroStyles from "./Hero.module.css";
import restaurantFood from "../../../assets/img/restauranfood.jpg";
function Hero() {
  return (
    <>
      <section className={heroStyles.hero}>
        <div className={layoutStyles.wrapper}>
          <div className={heroStyles.textBox}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className={layoutStyles.yellowButton}>
              Reserve a Table
            </button>
          </div>
          <div className={heroStyles.imageBox}>
            <img src={restaurantFood} alt={"Little Lemon restaurant"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
