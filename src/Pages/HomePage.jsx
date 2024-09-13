import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={css.hero}>
      <h1 className={css.header}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <a href="/catalog" className={css.button}>
        View Now
      </a>
    </div>
  );
};

export default HomePage;
