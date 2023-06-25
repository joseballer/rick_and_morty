import Card from "../card/Card";
import style from "./Cards.module.css";
export default function Cards({ characters, onClose}) {
  return (
    <div className={style.cardsContainer}>
      {characters.map((character) => (
        <Card
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
