import React from "react";
import styles from "../Card/Card.module.css";
import avatar from "../../assets/avatar.svg";

const Card = ({ character, setCharacters, removeCharacter }) => {
  const handleClick = () => {
    displayCharacterNameAndId();
    removeCharacter(character.id);
  };

  const displayCharacterNameAndId = () => {
    console.log(`Character name: ${character.name}, id: ${character.id}`);
  };

  return (
    <div className={styles.main} onClick={handleClick}>
      {character.image ? (
        <img
          src={character.image}
          alt={character.name}
          className={styles.image}
        />
      ) : (
        <div>
          <img src={avatar.src} alt="avatar" className={styles.avatar} />
        </div>
      )}
      <h2 className={styles.text}>{character.name}</h2>
      <h2 className={styles.text}>Actor: {character.actor}</h2>
      <h2 className={styles.text}>Date of birth: {character.dateOfBirth}</h2>
    </div>
  );
};

export default Card;
