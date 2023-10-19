import style from "./Card.module.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = (props: any, index: number) => {
  const { name, city, country, favorite_sport } = props;
//   console.log("props en card", props);

  return (
    <div key={index} className={style.card}>
      <h3 className={style.name}>{name}</h3>
      <p><b>City:</b> {city}</p>
      <p><b>Country:</b> {country}</p>
      <p><b>Favorite Sport:</b> {favorite_sport}</p>
    </div>
  );
};

export default Card;
