import { useState } from "react";
import { useEffect } from "react";
import styles from "../CardWrapper/CardWrapper.module.css";
import Card from "../Card/Card";
import axios from "axios";

const CardWrapper = () => {
  const [characters, setCharacters] = useState([]);

  const fetchedCharacters = async () => {
    try {
      const response = await axios.get(
        "https://hp-api.onrender.com/api/characters"
      );
      setCharacters(response.data.slice(0, 12));
    } catch (err) {
      console.log("Error fetching characters:", err);
    }
  };

  useEffect(() => {
    fetchedCharacters();
  }, []);

  console.log(characters);

  return (
    <div className={styles.main}>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CardWrapper;
