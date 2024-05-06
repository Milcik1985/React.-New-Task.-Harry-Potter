import styles from "../Card/Card.module.css";

const Card = ({ character }) => {
  return (
    <div className={styles.main}>
      <img
        src={character.image}
        alt={character.name}
        className={styles.image}
      />
      <h2 className={styles.text}>{character.name}</h2>
      <h2 className={styles.text}>Actor: {character.actor}</h2>
      <h2 className={styles.text}>Date of birth: {character.dateOfBirth}</h2>
    </div>
  );
};

export default Card;
