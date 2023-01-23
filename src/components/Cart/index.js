import React from 'react';
import axios from "axios";

import Info from "../Info";
import {useCart} from "../../hooks/useCart";

import styles from './Cart.module.scss'

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))

export default function Cart({ onClose, onRemove, opened, items=[]}) {

    const { cartItems, setCartItems, totalPrice } = useCart()
    const [orderId, setOrderId] = React.useState(null)
    const [isOrderCompleted, setIsOrderCompleted] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)


    const onClickMakeOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.post(`https://63ca7be6f36cbbdfc7594244.mockapi.io/orders`, {items: cartItems})
            setOrderId(data.id)
            setIsOrderCompleted(true)
            setCartItems([])

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i]
                await axios.delete(`https://63c97c45904f040a965f501f.mockapi.io/cart/${Number(item.id)}`)
                await delay()
            }

        } catch (error) {
            alert('Не удалось создать заказ :(')
        }
        setIsLoading(false)
    }

    return (

        <div  className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>

        <div className={styles.rightBar}>
            <h2 className="mb-30 d-flex justify-between">
                Корзина
                <img className="cu-p" src="/img/remove_btn.svg" alt="close" onClick={onClose}/>
            </h2>


            {
                items.length > 0 ?
                    <>
                    <div className="items flex">

                        {
                            items.map((obj) => (
                                <div key={obj.id} className="cart-item d-flex align-center mb-20">

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
                                <b>{totalPrice} руб.</b>
                            </li>
                            <li className="d-flex">
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>{totalPrice * 0.05} руб.</b>
                            </li>
                        </ul>

                        <button disabled={isLoading} className="green-btn" onClick={ onClickMakeOrder }>Оформить заказ  <img src="/img/arrow.svg" alt="arrow"/> </button>
                    </div>
                    </>
                    :
                    <Info
                        title={isOrderCompleted ? `Заказ успешно оформлен!` : "Корзина пуста"}
                        description={isOrderCompleted ? `Вы можете увидеть статус заказа #${orderId} в личном кабинете` : "Добавьте хотя бы одну пару обуви, чтобы сделать заказ"}
                        image={isOrderCompleted ? "/img/order-completed.jpg" : "/img/empty-cart.png"}
                    />
            }




        </div>
        </div>
    )
}
