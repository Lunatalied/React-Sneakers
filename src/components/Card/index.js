import React from "react";
import styles from "./Card.module.scss"
import ContentLoader from "react-content-loader"
import AppContext from "../../context";

export default function Card({ id, title, price, imageUrl, onClickPlus, onClickFavorite, loading, favorited}) {

    const [isFavorite, setIsFavorite] = React.useState(favorited)
    const { isItemAdded } = React.useContext(AppContext)
    const obj = {id, parentId: id, title, imageUrl, price}

    const onPlus = () => {
        onClickPlus(obj)
    }

    const onFavorite = (event) => {
        onClickFavorite(obj)
        setIsFavorite(!isFavorite)
    }

    return (
    <div className={styles.card}>
        {
            loading ?
                <ContentLoader
                    speed={2}
                    width={180}
                    height={190}
                    viewBox="0 0 150 187"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
                    <rect x="0" y="101" rx="3" ry="3" width="150" height="15" />
                    <rect x="0" y="121" rx="3" ry="3" width="93" height="15" />
                    <rect x="0" y="155" rx="8" ry="8" width="80" height="24" />
                    <rect x="117" y="148" rx="8" ry="8" width="32" height="32" />
                </ContentLoader>
                :
                <>
                <div className={styles.favorite}>
                    {onClickFavorite &&
                        <img
                            src={isFavorite ? "img/liked_btn.svg" : "img/unliked_btn.svg"}
                            alt="unlicked"
                            width={32}
                            height={32}
                            onClick={onFavorite}
                        />}
                </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} руб.</b>
            </div>
                {onClickPlus &&
                    <img
                    className={styles.plus_btn}
                    src={isItemAdded(id) ? "img/checked_btn.svg" : "img/plus_btn.svg"}
                    onClick={onPlus}
                    />}
            </div>
                </>
        }
    </div>
    )
}
