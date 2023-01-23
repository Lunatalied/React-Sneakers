import './App.css';
import Header from './components/Header'
import Cart from "./components/Cart";
import React, {useState} from "react";
import axios from "axios";
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";


function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpened, setCartOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [favorites, setFavorites] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    React.useEffect(() => {
        async function fetchData() {

            try {
                setIsLoading(true)
                const [ cartItemsResp, favoritesResp, itemsResp ] = await Promise.all([
                    axios.get('https://63c97c45904f040a965f501f.mockapi.io/cart'),
                    axios.get('https://63ca7be6f36cbbdfc7594244.mockapi.io/favorites'),
                    axios.get('https://63c97c45904f040a965f501f.mockapi.io/items')
                ])

                setIsLoading(false)

                setCartItems(cartItemsResp.data)
                setFavorites(favoritesResp.data)
                setItems(itemsResp.data)

            } catch (error) {
                alert('Ошибка при запросе данных')
            }

        }

        fetchData()
    }, [])


    const onAdd2Cart = async (obj) => {

        try {
            const findItem = cartItems.find((cartObj) => Number(cartObj.parentId) === Number(obj.id))
            if (findItem) {
                setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
                await axios.delete(`https://63c97c45904f040a965f501f.mockapi.io/cart/${findItem.id}`)
            } else {
                const {data} = await axios.post('https://63c97c45904f040a965f501f.mockapi.io/cart', obj)
                setCartItems((prev) => [...prev, data])
            }
        } catch (error) {
            alert("Не удалолсь добавить в корзину")
        }
    }

    const onRemoveItem = async (id) => {
        try {
            await axios.delete(`https://63c97c45904f040a965f501f.mockapi.io/cart/${Number(id)}`)
            setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(id)))
        } catch (error) {
            alert("Не удалось удалить товар из корзины")
        }

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
        return cartItems.some((obj) => Number(obj.parentId) === Number(id))
    }

    return (
        <AppContext.Provider value={{
            cartItems,
            favorites,
            items,
            isItemAdded,
            onAdd2Favorite,
            onAdd2Cart,
            setCartOpened,
            setCartItems}}>

            <div className="wrapper clear">

                <Cart onClose={() => setCartOpened(false)} items={cartItems} onRemove={onRemoveItem} opened={cartOpened} />

            <Header onClickCart={() => setCartOpened(true)} />

            <Routes>
                <Route path="" exact element={
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

                <Route path="favorites" exact element={
                    <Favorites />}>
                </Route>

                <Route path="orders" exact element={
                    <Orders />}>
                </Route>
            </Routes>


        </div>
        </AppContext.Provider>

    );
}

export default App;
