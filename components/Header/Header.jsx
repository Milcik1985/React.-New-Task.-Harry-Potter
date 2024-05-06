import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.main}>
      <div>
        <h1>Harry Potter FanClub</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Characters</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
