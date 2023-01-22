import React from "react";
import Card from "../components/Card";
import AppContext from "../context";


export default function Favorites() {

    const { favorites, onAdd2Favorite } = React.useContext(AppContext)
    {console.log(AppContext)}

    return (
        <>
        <div className="content p-40">

            <div className="d-flex align-center mb-40 justify-between">
                <h1>Избранное</h1>
            </div>


            <div className="d-flex flex-wrap">
                {favorites.map((item, index) =>
                    <Card
                        key={index}
                        favorited={true}
                        onClickFavorite={onAdd2Favorite}
                        {...item}
                    />)}
            </div>

        </div>
        </>
    )
}