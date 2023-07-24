import styles from "../app.module.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className={`${styles.logo}  `}>omato</div>
        <ul className={styles["nav-links"]}>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Sign out</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
