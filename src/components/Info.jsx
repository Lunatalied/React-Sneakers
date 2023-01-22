import React from "react";
import AppContext from "../context";

export default function Info( { title, description, image } ) {

    const { setCartOpened, setCartItems } = React.useContext(AppContext)

    return (
    <div className="cart-empty d-flex align-center justify-center flex-column flex">
        <img className="mb-20" width="120px" src={ image } alt="empty cart"/>
        <h2>{ title }</h2>
        <p className="opacity-6 text-center">{ description }</p>
        <button className="green-btn-back" onClick={() => setCartOpened(false)}>
            <img src="/img/arrow.svg" alt="Arrow"/>
            Вернуться к покупкам
        </button>
    </div>
    )
}