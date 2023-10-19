import style from "./searchbar.module.css"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Searchbar = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [data, setData] = useState<Array<any>>([]);
  const [error, setError] = useState<string>("");

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputSearch(value);
  }

  function handleSearch() {
    if (!inputSearch.length) {
      window.alert("Try writting something");
    } else
      axios
        .get(`http://localhost:3000/api/users?keyword=${inputSearch}`)
        .then((response) => {
          if (response.data)
            console.log("data en el front", response.data.data);
          const responseData = response.data.data;
          setData(responseData);
        })
        .catch((error) => setError(error.message.message));
  }
  //  console.log('data cargada en ele stado', data)

  return (
    <div className={style.searchcontainer}>
      <h2>Search on it</h2>
      <input
        className={style.inputsearch}
        type="search"
        name="search"
        value={inputSearch}
        onChange={handleInput}
        placeholder="What are you looking for?"
      />

      <button onClick={handleSearch}>Search</button>

      {error.length ? <span>{error}</span> : null}

      <div className={style.cardcontainer}>
        {data && data.length > 0
          ? data[0].name
            ? data.map((user, index) => <Card index={index} {...user} />)
            : data
          : null}
      </div>
    </div>
  );
};

export default Searchbar;
