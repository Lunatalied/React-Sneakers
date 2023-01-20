import './App.css';
import Header from './components/Header'
import Cart from "./components/Cart";
import React, {useState} from "react";
import axios from "axios";
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Favorites from "./pages/Favorites";


function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState(undefined)

    React.useEffect(() => {

        axios.get('https://63c97c45904f040a965f501f.mockapi.io/items').then(res => {
            setItems(res.data)
        })

        axios.get('https://63c97c45904f040a965f501f.mockapi.io/cart').then((res) => {
            setCartItems(res.data)
        })

        axios.get('https://63ca7be6f36cbbdfc7594244.mockapi.io/favorites').then((res) => {
            setFavorites(res.data)
        })


    }, [])


    const onAdd2Cart = async (obj) => {
        try {
            if (cartItems.find(cartObj => cartObj.id === obj.id)) {
                axios.delete(`https://63c97c45904f040a965f501f.mockapi.io/cart/${obj.id}`)
                setCartItems((prev) => prev.filter((item) => item.id !== obj.id))
            } else {
                const {data} = await axios.post('https://63c97c45904f040a965f501f.mockapi.io/cart', obj)
                setCartItems((prev) => [...prev, data])
            }
        } catch (error) {
            alert("Не удалолсь добавить в корзину")
        }
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://63c97c45904f040a965f501f.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onAdd2Favorite = async (obj) => {
        try {
            if (favorites.find(favObj => favObj.id === obj.id)) {
                axios.delete(`https://63ca7be6f36cbbdfc7594244.mockapi.io/favorites/${obj.id}`)

            } else {
                const {data} = await axios.post('https://63ca7be6f36cbbdfc7594244.mockapi.io/favorites', obj)
                setFavorites((prev) => [...prev, data])
            }
        } catch (error) {
            alert('Не удалось добавить в избранное')
        }
    }

    return (
        <div className="wrapper clear">

            { cartOpened && <Cart onClose={() => setCartOpened(false)} items={cartItems} onRemove={onRemoveItem} />}

            <Header onClickCart={() => setCartOpened(true)} />

            <Routes>
                <Route path="/" exact element={
                    <Home
                    items={items}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAdd2Favorite={onAdd2Favorite}
                    onAdd2Cart={onAdd2Cart}
                />}>

                </Route>

                <Route path="/favorites" exact element={
                    <Favorites items={favorites}  onAdd2Favorite={onAdd2Favorite} />}>
                </Route>
            </Routes>


        </div>
    );
}

export default App;
