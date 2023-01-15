import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="wrapper clear">

            <div className="overlay">
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


            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.svg"/>
                    <div className="headerInfo">
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>

                <ul className="d-flex">
                    <li className="mr-30">
                        <img width={18} height={18} src="/img/cart.svg"/>
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg"/>
                    </li>
                </ul>
            </header>

            <div className="content p-40">

                <div className="d-flex align-center mb-40 justify-between">
                    <h1 className="">Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="serch"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="card">
                    <div className="favourite">
                        <img src="/img/unliked_btn.svg" alt="unlicked" width={32} height={32}/>
                    </div>
                    <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg"></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
