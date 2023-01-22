import './App.css';
import Header from './components/Header'
import Cart from "./components/Cart";
import React, {useState} from "react";
import axios from "axios";
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Favorites from "./pages/Favorites";
import AppContext from "./context";


function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    React.useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const cartItemsResp = await axios.get('https://63c97c45904f040a965f501f.mockapi.io/cart')
            const favoritesResp = await axios.get('https://63ca7be6f36cbbdfc7594244.mockapi.io/favorites')
            const itemsResp = await axios.get('https://63c97c45904f040a965f501f.mockapi.io/items')

            setIsLoading(false)

            setCartItems(cartItemsResp.data)
            setFavorites(favoritesResp.data)
            setItems(itemsResp.data)
        }

        fetchData()
    }, [])


    const onAdd2Cart = async (obj) => {

        try {
            if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
                await axios.delete(`https://63c97c45904f040a965f501f.mockapi.io/cart/${Number(obj.id)}`)
                setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
            } else {
                const {data} = await axios.post('https://63c97c45904f040a965f501f.mockapi.io/cart', obj)
                setCartItems((prev) => [...prev, data])
            }
        } catch (error) {
            alert("Не удалолсь добавить в корзину")
        }
    }

    const onRemoveItem = async (id) => {
        await axios.delete(`https://63c97c45904f040a965f501f.mockapi.io/cart/${Number(id)}`)
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onAdd2Favorite = async (obj) => {
        try {
            if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
                await axios.delete(`https://63ca7be6f36cbbdfc7594244.mockapi.io/favorites/${Number(obj.id)}`)
                setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))

            } else {
                const {data} = await axios.post('https://63ca7be6f36cbbdfc7594244.mockapi.io/favorites', obj)
                setFavorites((prev) => [...prev, data])
            }
        } catch (error) {
            alert('Не удалось добавить в избранное')
            console.log(obj)
        }
    }

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.id) === Number(id))
    }

    return (
        <AppContext.Provider value={{cartItems, favorites, items, isItemAdded, onAdd2Favorite, setCartOpened, setCartItems}}>
            <div className="wrapper clear">

            { cartOpened && <Cart onClose={() => setCartOpened(false)} items={cartItems} onRemove={onRemoveItem} />}

            <Header onClickCart={() => setCartOpened(true)} />

            <Routes>
                <Route path="/" exact element={
                    <Home
                        items={items}
                        cartItems={cartItems}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        onAdd2Favorite={onAdd2Favorite}
                        onAdd2Cart={onAdd2Cart}
                        isLoading={isLoading}
                    />}>

                </Route>

                <Route path="/favorites" exact element={
                    <Favorites />}>
                </Route>
            </Routes>


        </div>
        </AppContext.Provider>

    );
}

export default App;
