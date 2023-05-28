import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  image,
  onClose,
}) {
  return (
    <div className={style.container}>
      <button className={style.closeButton} onClick={()=> onClose(id)}>
        X
      </button>
      <Link to={`/Detail/${id}`}><h2>{name}</h2></Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img className={style.cardImg} src={image} alt="Rick" />
    </div>
  );
}
