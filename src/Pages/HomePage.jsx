import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={css.main}>
      <section className={css.hero}></section>

      <div className={css.contaier}>
        <h1>Campers for rent</h1>
        <p>
          We offer camper van rentals across Ukraine, where you can find the
          camper of your dreams. Visit our catalog to select the perfect one for
          you. Welcome to Your Adventure on Wheels! Experience the freedom of
          the open road with our premium camper van rentals. Whether you're
          planning a weekend escape or a cross-country adventure, our fully
          equipped campers provide the perfect home on the go. Explore stunning
          landscapes, embrace the excitement of outdoor living, and create
          unforgettable memories with loved ones—completely at your own pace.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
