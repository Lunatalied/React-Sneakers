import React from 'react';

export default function Cart() {
    return (
        <div style={{ display: 'none' }} className="overlay">
        <div className="right-bar">
            <h2 className="mb-30">Корзина</h2>

            <div className="items">

                <div className="cart-item d-flex align-center">
                    <img className="mr-20" src="/img/sneakers/1.jpg" alt="sneakers" width={70} height={70}/>

                    <div style={{backgroundImage: 'url(/img/sneakers.1.jpg)'}} className="cart-item-img"></div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="remove-btn" src="/img/remove_btn.svg" alt="remove"/>

                </div>

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
