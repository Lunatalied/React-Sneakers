import React, {useState} from "react";
import Card from "../components/Card";
import AppContext from "../context";
import axios from "axios";


export default function Orders() {

    const { onAdd2Cart, onAdd2Favorite } = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = useState(true)

    React.useEffect(() => {

        (async () => {
            try {
                const {data} = await axios.get('https://63ca7be6f36cbbdfc7594244.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            }
            catch (error) {
                alert("Ошибка при загрузке заказов")
            }
        })()
        //data.map((obj) => obj.items).flat()

    }, [])

    return (
        <>
            <div className="content p-40">

                <div className="d-flex align-center mb-40 justify-between">
                    <h1>Мои заказы</h1>
                </div>



                <div className="d-flex flex-wrap">
                    { (isLoading ? [...Array(8)] : orders)
                        .map((item, index) =>
                        <Card
                            key={index}
                            loading={isLoading}
                            {...item}
                        />)}
                </div>

            </div>
        </>
    )
}