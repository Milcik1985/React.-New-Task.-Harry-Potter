import styles from "../Header/Header.module.css";
import LinksWrapper from "./Links/Links";

const Header = () => {
  const links = [
    { link: "#", title: "About Us" },
    { link: "#", title: "Characters" },
    { link: "#", title: "Contact Us" },
  ];
  return (
    <header className={styles.main}>
      <div>
        <h1>Harry Potter FanClub</h1>
      </div>
      <nav>
        <ul>
          <LinksWrapper links={links} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
