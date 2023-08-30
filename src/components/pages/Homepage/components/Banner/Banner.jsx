import layoutStyles from "../../../../layout/Layout/Layout.module.css";
import bannerStyles from "./Banner.module.css";
import restaurantb from "../../../../../assets/img/Mario and Adrian A.jpg";
import restaurant from "../../../../../assets/img/Mario and Adrian b.jpg";

function Banner() {
  return (
    <section className={layoutStyles.wrapper}>
      <div className={bannerStyles.columns}>
        <article>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.{" "}
          </p>
        </article>
        <div className={bannerStyles.imagesWrapper}>
          <figure className={bannerStyles.firstImage}>
            <img src={restaurant} alt="Mario and Adrian" />
          </figure>
          <figure className={bannerStyles.secondImage}>
            <img src={restaurantb} alt="Adrian and Mario" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Banner;
