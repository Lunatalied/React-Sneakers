import React from 'react';

export default function Cart({ onClose, onRemove, items=[]}) {
    return (

        <div  className="overlay">

        <div className="right-bar">
            <h2 className="mb-30 d-flex justify-between">
                Корзина
                <img className="cu-p" src="/img/remove_btn.svg" alt="close" onClick={onClose}/>
            </h2>


            {
                items.length > 0 ?
                    <>
                    <div className="items">

                        {
                            items.map((obj) => (
                                <div className="cart-item d-flex align-center mb-20">

                                    <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cart-item-img"></div>
                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img className="remove-btn" src="/img/remove_btn.svg" alt="remove" onClick={() => onRemove(obj.id)}/>

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
                    </>
                    :
                    <div className="cart-empty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.png" alt="empty cart"/>
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару, чтобы сделать заказ</p>
                        <button className="green-btn-back" onClick={onClose}>
                            <img src="/img/arrow.svg" alt="Arrow"/>
                            Вернуться к покупкам
                        </button>
                    </div>
            }




        </div>
        </div>
    )
}
