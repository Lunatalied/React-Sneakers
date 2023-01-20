import React from 'react';

export default function Cart({ onClose, items=[]}) {
    return (

        <div  className="overlay">

        <div className="right-bar">
            <h2 className="mb-30 d-flex justify-between">
                Корзина
                <img className="cu-p" src="/img/remove_btn.svg" alt="close" onClick={onClose}/>
            </h2>

            <div className="items">

                {
                    items.map((obj) => (
                        <div className="cart-item d-flex align-center mb-20">

                            <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cart-item-img"></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img className="remove-btn" src="/img/remove_btn.svg" alt="remove" onClick={() => alert('remove')}/>

                        </div>
                    ))
                }

            </div>


            <div className="cart-total-block">
                <ul>
                    <li className="d-flex">
                        <span>Итого:</span>
                        <div></div>
                        <b>1111 руб.</b>
                    </li>
                    <li className="d-flex">
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>888 руб.</b>
                    </li>
                </ul>

                <button className="green-btn">Оформить заказ  <img src="/img/arrow.svg" alt="arrow"/> </button>
            </div>
        </div>
        </div>
    )
}
