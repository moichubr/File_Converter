import style from "./Card.module.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = (props: any, index: number) => {
  const { name, city, country, favorite_sport } = props;
//   console.log("props en card", props);

  return (
    <div key={index} className={style.card}>
      <div className={style.titlecontainer}>
      <h3 className={style.name}>{name}</h3>
      </div>
      <div className={style.pcontainer}>
        <div className={style.div}>
        <span><b>City</b></span>
      <p> {city}</p>

        </div>

        <div className={style.div}>
      <span><b>Country</b> </span>
      <p>{country}</p>

        </div>

        <div>
      <span><b>Favorite Sport</b></span>
      <p> {favorite_sport}</p>

        </div>
      </div>
     
    </div>
  );
};

export default Card;
