import Card from "../components/Card";
import React from "react";


export default function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAdd2Favorite, onAdd2Cart}) {
    return (
        <>
        <div className="content p-40">

            <div className="d-flex align-center mb-40 justify-between">
                <h1 className="">{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block">
                    <img src="/img/search.svg" alt="serch"/>
                    <img
                        className="clear cu-p"
                        src="/img/remove_btn.svg"
                        alt="clear"
                        onClick={() => setSearchValue('')}/>
                    <input placeholder="Поиск..." value={searchValue} onChange={onChangeSearchInput}/>
                </div>
            </div>


            <div className="d-flex flex-wrap">
                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) =>
                    <Card
                        key={index}
                        onClickPlus={(obj) => onAdd2Cart(obj)}
                        onClickFavorite={(obj) => onAdd2Favorite(obj)}
                        {...item}
                    />)}
            </div>

        </div>
        </>
    )
}