import { faker } from '@faker-js/faker';
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
                      <img src={faker.image.url()} alt="Sarah Connor"/>
                  </figure>
                  <span>Sarah Connor</span>
              </div>
              <p><span>“</span>Friendly service and great products.<span>”</span></p>
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
                        <img src={faker.image.url()} alt="John Smith"/>
                    </figure>
                    <span>John Smith</span>
                </div>
                <p><span>“</span>I love Little Lemon!<span>”</span></p>
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
                        <img src={faker.image.url()} alt="Robert Paulsen"/>
                    </figure>
                    <span>Robert Paulsen</span>
                </div>
                <p><span>“</span>Fast delivery and great food.<span>”</span></p>
            </article>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
