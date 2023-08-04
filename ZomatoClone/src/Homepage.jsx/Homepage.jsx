import styles from "../app.module.css"
import Navbar from "../components/Navbar"
import ProductPage from "../productPage/ProductPage"
const Homepage = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <section className={styles.hero}>
          <h1>Discover the Best Restaurants Near You</h1>
          <p>Explore the best restaurants, cafes, and bars in your city.</p>
          <a href="#" className={styles["cta-button"]}>
            Get Started
          </a>
        </section>

        <section className={styles["popular-restaurants"]}></section>

        <section className={styles["cuisine-options"]}></section>
      </main>
      <footer>
        <ProductPage />
      </footer>
    </>
  )
}

export default Homepage
