import React from "react";
import styles from "./Card.module.scss"

export default function Card({ id, title, price, imageUrl, onClickPlus, onClickFavorite, favorited = false}) {

    const [added, setAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onPlus = () => {
        onClickPlus({id, title, imageUrl, price})
        setAdded(!added)
    }

    const onFavorite = () => {
        onClickFavorite({id, title, imageUrl, price})
        setIsFavorite(!isFavorite)
    }

    return (
    <div className={styles.card}>
        <div className={styles.favorite} onClick={onClickFavorite}>
            <img src={isFavorite ? "/img/liked_btn.svg" : "/img/unliked_btn.svg"} alt="unlicked" width={32} height={32} onClick={onFavorite}/>
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
