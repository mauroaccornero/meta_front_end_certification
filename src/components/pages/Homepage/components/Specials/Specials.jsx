import layoutStyles from "../../../../layout/Layout/Layout.module.css";
import specialsStyles from "./Specials.module.css";
import greekSalad from "../../../../../assets/img/greek salad.jpg";
import bruschetta from "../../../../../assets/img/bruchetta.svg";
import lemonDessert from "../../../../../assets/img/lemon dessert.jpg";

function Specials() {
  return (
    <section className={layoutStyles.wrapper}>
      <div className={specialsStyles.top}>
        <h2>This week specials!</h2>{" "}
        <button className={layoutStyles.yellowButton}>Online menu</button>
      </div>
      <div className={specialsStyles.columns}>
        <article>
          <figure>
            <img src={greekSalad} alt={"Greek salad"} />
          </figure>
          <div className={specialsStyles.columnInfo}>
            <h3>Greek salad</h3>
            <span>$12.99</span>
          </div>
          <div className={specialsStyles.columnDescription}>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
          </div>
          <div className={specialsStyles.columnCTA}>
            <a href="/">Order a delivery</a>
          </div>
        </article>

        <article>
          <figure>
            <img src={bruschetta} alt={"Bruschetta"} />
          </figure>
          <div className={specialsStyles.columnInfo}>
            <h3>Bruschetta</h3>
            <span>$5.99</span>
          </div>
          <div className={specialsStyles.columnDescription}>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.{" "}
            </p>
          </div>
          <div className={specialsStyles.columnCTA}>
            <a href="/">Order a delivery</a>
          </div>
        </article>

        <article>
          <figure>
            <img src={lemonDessert} alt={"Lemon dessert"} />
          </figure>
          <div className={specialsStyles.columnInfo}>
            <h3>Lemon Dessert</h3>
            <span>$5.00</span>
          </div>
          <div className={specialsStyles.columnDescription}>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
          </div>
          <div className={specialsStyles.columnCTA}>
            <a href="/">Order a delivery </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Specials;
