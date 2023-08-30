import layoutStyles from "../../layout/Layout/Layout.module.css";
import notFoundStyles from "./NotFound.module.css";

function NotFound() {
  return (
    <section className={layoutStyles.wrapper}>
      <div className={notFoundStyles.text}>
        <h1>Page not found</h1>
        <a href={"/"}>Back to home</a>
      </div>
    </section>
  );
}

export default NotFound;
