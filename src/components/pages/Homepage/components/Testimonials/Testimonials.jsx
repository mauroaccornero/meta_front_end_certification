import { faker } from "@faker-js/faker";
import layoutStyles from "../../../../layout/Layout/Layout.module.css";
import testimonialsStyles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <section className={testimonialsStyles.wrapper}>
      <div className={layoutStyles.wrapper}>
        <h2>Testimonials</h2>
        <div className={testimonialsStyles.columns}>
          <article>
            <div className={testimonialsStyles.ratingBox}>
              5/5
              <div className={testimonialsStyles.positive}></div>
              <div className={testimonialsStyles.positive}></div>
              <div className={testimonialsStyles.positive}></div>
              <div className={testimonialsStyles.positive}></div>
              <div className={testimonialsStyles.positive}></div>
            </div>
            <div className={testimonialsStyles.userInfo}>
              <figure>
                <img src={faker.image.url()} alt="Sarah Connor" />
              </figure>
              <span>Sarah Connor</span>
            </div>
            <cite>
              <span>“</span>Friendly service and great products.<span>”</span>
            </cite>
          </article>
          <article>
            <div className={testimonialsStyles.ratingBox}>
              4/5
              <div className={testimonialsStyles.positive}></div>
              <div className={testimonialsStyles.positive}></div>
              <div className={testimonialsStyles.positive}></div>
              <div className={testimonialsStyles.positive}></div>
              <div></div>
            </div>
            <div className={testimonialsStyles.userInfo}>
              <figure>
                <img src={faker.image.url()} alt="John Smith" />
              </figure>
              <span>John Smith</span>
            </div>
            <cite>
              <span>“</span>I love Little Lemon!<span>”</span>
            </cite>
          </article>
          <article>
            <div className={testimonialsStyles.ratingBox}>
              4/5
              <div className={testimonialsStyles.positive}></div>
              <div className={testimonialsStyles.positive}></div>
              <div className={testimonialsStyles.positive}></div>
              <div className={testimonialsStyles.positive}></div>
              <div></div>
            </div>
            <div className={testimonialsStyles.userInfo}>
              <figure>
                <img src={faker.image.url()} alt="Robert Paulsen" />
              </figure>
              <span>Robert Paulsen</span>
            </div>
            <cite>
              <span>“</span>Fast delivery and great food.<span>”</span>
            </cite>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
