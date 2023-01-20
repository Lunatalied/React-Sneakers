import React from "react";
import styles from "./Card.module.scss"

export default function Card({ title, price, imageUrl, onClickPlus, onClickFavorite }) {

    const [added, setAdded] = React.useState(false);

    const onPlus = () => {
        onClickPlus({title, imageUrl, price})
        setAdded(!added)
    }

    return (
    <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
            <img src="/img/unliked_btn.svg" alt="unlicked" width={32} height={32}/>
        </div>
        <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
            </div>
            <img className={styles.plus_btn} src={added ? "/img/checked_btn.svg" : "/img/plus_btn.svg"} onClick={onPlus}/>
        </div>
    </div>
    )
}