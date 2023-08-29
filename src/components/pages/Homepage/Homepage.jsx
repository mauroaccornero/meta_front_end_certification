import Hero from "./components/Hero/Hero";
import Specials from "./components/Specials/Specials";
import Testimonials from "./components/Testimonials/Testimonials";
import Banner from "./components/Banner/Banner";

function Homepage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <Banner />
    </>
  );
}

export default Homepage;
