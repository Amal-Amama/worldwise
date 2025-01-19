import React from "react";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import styles from "./CountryList.module.css";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  // const countries = [];
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  //Method 2
  // const countrys = cities.map((city) => city.country);
  // let result = [];
  // for (let i = 0; i < countrys.length; i++) {
  //   if (!result.includes(countrys[i])) {
  //     result.push(countrys[i]);
  //   }
  // }

  //Method3
  // const countrys = cities.map((city) => city.country);
  // const result = [...new Set(countrys)];

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
