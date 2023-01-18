import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header'
import Cart from "./components/Cart";

const arr = [{title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl:'img/sneakers/1.jpg'},
            {title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl:'img/sneakers/2.jpg'},
            {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl:'img/sneakers/3.png'},
            {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl:'img/sneakers/4.jpg'},
            {title: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imageUrl:'img/sneakers/5.png'}]

function App() {
    return (
        <div className="wrapper clear">
            <Cart />

            <Header />

            <div className="content p-40">

                <div className="d-flex align-center mb-40 justify-between">
                    <h1 className="">Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/img/search.svg" alt="serch"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>


                <div className="d-flex">
                    {arr.map((obj) =>
                        <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl}
                    />)}


                </div>


            </div>
        </div>
    );
}

export default App;
